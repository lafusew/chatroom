<script lang="ts">
  export let content: string;
  export let username: string;
  export let color: string;
  export let self: boolean = false;
  export let fromSameAsPrevious: boolean = false;
</script>

<div class="messageSection"
  style="
  justify-content: {self ? 'flex-end' : 'flex-start'};
  padding-top: {fromSameAsPrevious ? 4 : 32}px;
  "
>
  <div class="messageBox" style="background-color: {color || '#ECE9DD'};">
    {#if !fromSameAsPrevious}  
      <p class="username" style="{self ? "right: 8px;" : "left: 8px;"}">
        {username.length >= 20 ? username.slice(0, 20)+'...' : username}
      </p>
    {/if}
    <p class="message">
      {content}
    </p>
  </div>
</div>

<style>
  p {
    margin: 0px;
  }

  .messageBox {
    width: max-content;
    padding: 8px 16px;
    position: relative;
    border-radius: 16px;
  }

  .messageSection {
    width: 100%;
    display: flex;
  }

  .message {
    text-align: start;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    max-width: 532px;
    word-wrap: break-word;
  }

  .username {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-weight: 600;
    position: absolute;
    bottom: calc(100% + 4px);
    white-space: nowrap;
  }
</style>