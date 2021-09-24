<script lang="ts">
  import { io } from "socket.io-client";
  import Login from "./components/Login.svelte";
  import MessageBar from "./components/MessageBar.svelte";
  import Messages from "./components/Messages.svelte";
  import Users from "./components/Users.svelte";
  import Socket from "./components/utils/Socket.svelte";
  import { USER_COLORS } from "./helpers/color";
  import { randomEl } from "./helpers/random";
  import { defaultUser,Message,User } from "./types";

  // List of Socket.io "message" received
  let messages: Message[] = [];
  let clientUser: User;
  let socketId: string; 
  let users: User[] = [];
  let avatar: any;
  
  // Socket io connection
  let socket = io('https://whispering-chamber-09886.herokuapp.com/');
  //let socket = io('http://localhost:3000/');

  function onNewMessage(message: Message) {
    const sender = users.find(user => user.id === message.user.id);
    messages = [...messages, {...message, user: sender}];
  }

  function retrievePreviousMessages(list: Message[]) {
    messages = list.map(message => {
      const sender = users.find(user => user.id === message.user.id) || defaultUser;
      if (message.user.id === sender.id) {
        message.user = sender;
      }
      return message;
    });
  }

  function retrieveConnectedUsers(list: User[]) {
    users = list;
  }

  function onUserConnection(newUser: User): void {
    users = [...users, newUser];
  }

  function onUserDisconnection(userId: string): void {
    users = users.filter(user => user.id !== userId);
  }

  function onUserNameChange(changedUser: User): void {
    users = users.map(user => {
      if (user.id === changedUser.id) {
        if (user.id === clientUser.id){
          clientUser.name = changedUser.name;
        }
        user.name = changedUser.name;
      }
      return user;
    })
  }

  function retrieveClientUser(currentUser: User): void {
    console.log(currentUser);
    clientUser = currentUser;
  }

  function onLogin(characterChosen) {
    avatar = characterChosen;
    socket.emit("setUsername", characterChosen.name)
  }

  // Message emition
  function onMessageEmit(msg: string) {
    socket.emit("message", msg);
  };

  $: coloredUser = users.map(user => {
    if (user.color) {
      return user;
    } else {
      user.color = randomEl(USER_COLORS);
      return user;
    }
  })
</script>

<main>
  <Socket
    {socket}
    {onNewMessage}
    {onUserConnection}
    {onUserDisconnection}
    {onUserNameChange}
    {retrieveClientUser}
    {retrieveConnectedUsers}
    {retrievePreviousMessages}
  />
  {#if clientUser?.name === undefined || clientUser?.name === 'Anonymous'}
    <Login {onLogin}/>
  {:else}
    <section class="user-section">
      <Users users={coloredUser} {avatar}/>
    </section>
    <section class="main-section">
      <Messages messages={messages} clientId={clientUser?.id}/>
      <MessageBar onEmit={(msg) => onMessageEmit(msg)}/>
    </section>
  {/if}
</main>
<style>
  main {
    overflow: hidden;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: flex-start;
    align-items: stretch;
  }

	.main-section {
    height: 100%;
    width: 100%;
    min-width: 400px;
		text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>