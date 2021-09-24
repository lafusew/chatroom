<script lang="ts">
  export let username: string;
  export let color: string = '#F1D37C'
</script>

{ #if username !== 'Anonymous' }  
  <div class="user-tag" style={`background: ${color};`}>
    {username.length >= 20 ? username.slice(0, 20)+'...' : username}
  </div>
{/if }

<style>
  .user-tag {
    margin: 4px 0px;
    height: 36px;
    box-sizing: border-box;
    width: max-content;
    border-radius: 16px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
  }
</style>