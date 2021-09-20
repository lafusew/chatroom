<script lang="ts">
  // List of all raw messages
  export let messages: string[];
</script>

<div>
  {#each messages as message}
    <p>{message}</p>  
  {/each}
</div>

<style>
  div {
    width: 300px;
    height: 500px;
    overflow-y: scroll;
  }
</style>