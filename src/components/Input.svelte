<script lang="ts">
  // Emiting method provided by App.Svelte
  export let onEmit:(msg: string) => void;

  //input ref & "controlled" value
  let input: HTMLInputElement;
  let inputValue: string = '';

  // Trigger emit method and clear input
  function handleClick() {
    onEmit(inputValue);
    inputValue = '';
    input.focus();
  }
</script>

<input bind:this={input} bind:value={inputValue}>
<btn on:click={handleClick}>Emit</btn>
<p>{inputValue}</p>