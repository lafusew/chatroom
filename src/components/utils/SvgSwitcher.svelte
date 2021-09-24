<script lang="ts">
  import Baguette from "../../images/Baguette.svelte";
  import Chien from "../../images/Chien.svelte";
  import Hat from "../../images/Hat.svelte";
  import Pant from "../../images/Pant.svelte";
  import Shirt from "../../images/Shirt.svelte";
  import Shoes from "../../images/Shoes.svelte";
  import type { SVGItem } from "../../types";

  export let onCharacterChanges: ({type: SVGItem, value: string}) => void;
  export let item: SVGItem;
  const ITEMS_COLORS = {
    'HAT': ['#F1D37C', '#362F32', '#496555', '#58524D'],
    'SHIRT': ['#D5BFC9', '#B88D87', '#BFD5D1', '#E1D8EF'],
    'SHOES': ['#58524D', '#362F32'],
    'MAGIC': ['#E1D8EF', '#F1D37C', '#BFC5D5', '#B88D87', '#F1B47C', '#D5BFC9', '#CCD2A8', '#BFD5D1'],
    'PANT': ['#58524D', '#362F32', '#CCD2A8', '#2B4039'],
    'ACCESORY': ['#FFFF']
  }

  let itemIterator: number = 0;
  
  function handleItemClick() {
    if (itemIterator < ITEMS_COLORS[item].length - 1) {
      itemIterator += 1;
    } else {
      itemIterator = 0
    }
    onCharacterChanges({type: item, value: ITEMS_COLORS[item][itemIterator]})
  }
</script>

<div class="item" on:click={handleItemClick}>
  {#if item === 'HAT' }
    <Hat color={ITEMS_COLORS[item][itemIterator]}/>
  {:else if item === 'SHIRT'}
    <Shirt color={ITEMS_COLORS[item][itemIterator]}/>
  {:else if item === 'MAGIC'}
    <Baguette color={ITEMS_COLORS[item][itemIterator]}/>
  {:else if item === 'PANT'}
    <Pant color={ITEMS_COLORS[item][itemIterator]}/>
  {:else if item === 'SHOES'}
    <Shoes color={ITEMS_COLORS[item][itemIterator]}/>
  {:else}
    <Chien />
  {/if}
</div>

<style>
 .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 32px;
    margin: 12px 0px;
    background-color: #ECE9DD;
  }
</style>