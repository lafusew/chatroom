<script lang="ts">
import { isBlank } from "../helpers/string";
import Input from "./Input.svelte";
import SvgIcon from "./utils/SvgIcon.svelte";

  // Emiting method provided by App.Svelte
  export let onEmit:(msg: string) => void;
  // Trigger emit method and clear input
  function handleSubmit(string): void {
    if (!isBlank(string)) onEmit(string);
  };
</script>

<div class="inputContainer">
  <button>
    <SvgIcon size={23} color='#AE9796' iconName='sticker'/>
  </button>
  <Input placeholder='Envoyer un message sur le chat' onSubmit={handleSubmit}/>
</div>

<style>
  .inputContainer {
    padding: 16px 22px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #638B80;
  }

  button {
    box-sizing: border-box;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin: 0px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ECE9DD;
  }
</style>

