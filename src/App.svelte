<script lang="ts">
  import { io } from "socket.io-client";
  import Input from './components/Input.svelte';
  import Messages from "./components/Messages.svelte";

  // List of Socket.io "message" received
  let messages = [];

  // Socket io connection
  let socket = io('http://localhost:3000');
  socket.on("connect", () => {console.log(socket.id)});

  // Socket io subscription
  socket.on("message", (...args) => {messages = [...messages, args[0]]; console.log(args[0])});

  // Socket io emition
  function onEmit(msg: string) {
    socket.emit("add-message", msg);
  };
</script>

<main>
	<h1>Socket.IO</h1>
  <p>Socket.io integration prototype in Svelte</p>
  <Input onEmit={(msg) => onEmit(msg)}/>
  <Messages messages={messages.map(message => message.text)}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>