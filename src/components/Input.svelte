<script lang='ts'>
  export let onSubmit:(str: string) => void; 
  export let placeholder: string;

  let inputValue: string = '';
  let input: HTMLTextAreaElement;

  function handleKeypress(e): void {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(inputValue);
      inputValue = '';
      input.focus();
    }
  };
</script>
<div class="input-container">
  <textarea
      placeholder={placeholder}
      on:keypress={handleKeypress}
      bind:value={inputValue}
      bind:this={input}
  />
  <slot></slot>
</div>

<style>
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }
  textarea {
    height: 45px;
    width: 100%;
    resize: none;
    margin: 0;
    padding-top: 12px;
    padding-left: 16px;
    background: #ECE9DD;
    border-color: #ECE9DD;
    border-radius: 16px;
  }

  textarea:focus {
    outline: none !important;
  }

  ::placeholder {
    color: #AE9796;
  }
</style>