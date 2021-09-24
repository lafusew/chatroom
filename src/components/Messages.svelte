<script lang="ts">
  import { afterUpdate,beforeUpdate,onMount } from 'svelte';
  import { isBlank } from '../helpers/string';
  import Village from '../images/Village.svelte';
  import type { Message as IMessage } from '../types';
  import Message from './Message.svelte';
  
  // List of all raw messages
  export let messages: IMessage[];
  export let clientId: string;

  let div: HTMLDivElement;
  let autoscroll;

	beforeUpdate(() => {
		autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
	});

	afterUpdate(() => {
		if (autoscroll) div.scrollTo(0, div.scrollHeight);
	});

  onMount(() => {
    div.scrollTo(0, div.scrollHeight);
  })

  function fromSameSenderCheck(index: number, message: IMessage): boolean {
    if (index - 1 < 0) {
      return false
    } else {
      return messages[index - 1].user.id === message.user.id;
    }
  }
</script>

<div id="messages" bind:this={div}>
  {#each messages as message, i}
    {#if !isBlank(message.value)} 
      <Message
        username={message.user.name}
        content={message.value}
        color={message.user.color}
        self={message.user.id === clientId}
        fromSameAsPrevious={fromSameSenderCheck(i, message)}
      />
    {/if}
  {/each}
  <div class="village">
    <Village />
  </div>
</div>

<style>
  #messages {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 16px 12% 15vw 12%;
    overflow-y: auto;
    position: relative;
  }

  .village {
  position: fixed;
  bottom: 70px;
  right: 0;
  z-index: 10;
}
</style>
