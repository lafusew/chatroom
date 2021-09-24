<script lang="ts">
  import type { Socket } from "socket.io-client";
  import type { Message,User } from "../../types";
  export let onUserConnection: (newUser: User) => void;
  export let onUserDisconnection: (userId: string) => void;
  export let onNewMessage: (message: Message) => void;
  export let onUserNameChange: (user: User) => void;
  export let retrieveClientUser: (user: User) => void;
  export let retrieveConnectedUsers: (users: User[]) => void;
  export let retrievePreviousMessages: (messages: Message[]) => void;
  
  export let socket: Socket;

  let clientUser: User;
  let socketId: string;

   // Get current socket id
   socket.on("connect", () => socketId = socket.id);

  // Ping Socket.io server to reveive users list on "users"
  socket.emit("getUsers");
  // Ping Socket.io server to reveive messages list on "messages"
  socket.emit("getMessages");

  socket.on("updateUsername", (...args) => {
    onUserNameChange(args[0]);
  });

  socket.on("userConnection", (...args) => {
    if (clientUser === undefined) {
      clientUser = args[0];
      retrieveClientUser(args[0]);
    } else {
      onUserConnection(args[0]);
    }
  });

  socket.on("userDisconnection", (...args) => {
    onUserDisconnection(args[0].id);
  });

  socket.on("message", (...args) => onNewMessage(args[0]));
  socket.on("users", (...args)=> retrieveConnectedUsers([...args[0]]));
  socket.on("messages", (...args) => retrievePreviousMessages([...args[0]]));
</script>