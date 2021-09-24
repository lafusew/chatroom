<script lang='ts'>
  import type { SVGItem } from "../types";
  import Character from "./Character.svelte";
  import Input from "./Input.svelte";
  import SvgSwitcher from "./utils/SvgSwitcher.svelte";
  export let onLogin: (characterChosen) => void;

  const ITEMS_SWITCHER_ROW_1: SVGItem[] = ['HAT', 'SHIRT', 'PANT'];
  const ITEMS_SWITCHER_ROW_2: SVGItem[] = ['ACCESORY', 'MAGIC', 'SHOES'];
  let characterChosen = {
    name: '',
    HAT: '#F1D37C',
    SHIRT: '#D5BFC9',
    PANT: '#58524D',
    ACCESORY: '#58524D',
    MAGIC: '#E1D8EF',
    SHOES: '#58524D'
  };

  function onCharacterChanges(modif:{type: SVGItem, value: string}) {
    characterChosen[modif.type] = modif.value;
    console.log(characterChosen);
  }

  function onSubmit(string) {
    characterChosen.name = string;
    onLogin(characterChosen);
  }

</script>

<section id="login">
  <div class="container">
    <div class="tab-bar">
      <div class="round purple"/>
      <div class="round yellow"/>
      <div class="round green"/>
    </div>
    <div class="flexboxContainer">
      <div class="grid-container">
        <div class="items">
          {#each ITEMS_SWITCHER_ROW_1 as item}
            <div class="item">
              <SvgSwitcher {onCharacterChanges} {item}/>
            </div>
          {/each}
          </div>
          <div class="character">
            <Character characterColor={characterChosen} />
          </div>
          <div class="items">
            {#each ITEMS_SWITCHER_ROW_2 as item}
              <SvgSwitcher {onCharacterChanges} {item}/>
            {/each}
          </div>
      </div>
      <div class="input-container">
        <h2 class="input-label">
          quel est<br>ton nom ?
        </h2>
        <Input placeholder='Définir un pseudonyme' onSubmit={onSubmit} />
      </div>
    </div>
  </div>
</section>

<style>
  button {
    margin-top: 32px;
    background: #D5BFC9;
    color: #362F32;
    padding: 8px 16px;
    box-sizing: border-box;
    border-radius: 16px;
  }
  .input-label {
    color: #6A7973;
    text-align: right;
    max-width: 300;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-weight: bold;
    font-size: 72px;
    line-height: 90%;
    margin: 32px 0px;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .items {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .grid-container {
    max-width: 470px;
    display: grid; 
    grid-template-columns: 0.5fr 2fr 0.5fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas:  "items character items";
  }

  .flexboxContainer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: max-content;
    padding: 50px;
  }

  .tab-bar {
    padding-left: 40px;
    display: flex;
    align-items: center;
    height: 70px;
    background-color: #ECE9DD;
    box-sizing: border-box;
    border-radius: 32px 32px 0px 0px;
  }

  .green {
    background-color: #496555;
  }
  .yellow {
    background-color: #F1D37C;
  }
  .purple {
    background-color: #D5BFC9;
  }

  .round {
    margin-right: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  .container {
    width: 82%;
    height: 75%;
    border-radius: 32px;
    background-color: #FDFDFB;
  }

  #login {
    background-color: #2B4039;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>