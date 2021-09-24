<script lang="ts">
  import type { User as IUser } from '../types';
  import Character from './Character.svelte';
  import User from './User.svelte';
  import SvgIcon from './utils/SvgIcon.svelte';
  export let avatar: any;
  export let users: IUser[] = [];

  $: anonymCount = users.filter(user => user.name === "Anonymous").length;
</script>

<div id="main-container">
  <h2>
    hey you, you're finally awake
  </h2>
  <div class="flexColumnContainer mt">
    <div class="flexContainer">
      <SvgIcon iconName='house' size={18}/>
      <p class="usersStatus">En ligne</p>
    </div>
    <div class="flexColumnContainer user-list ">
      {#each users as user}
        <User username={user.name} color={user.color}/>
      {/each}
    </div>
    <p class="anonymCounter">... et {anonymCount} anonymes</p>
    <div class="character-container">
      <Character characterColor={avatar}/>
    </div>
  </div>
</div>


<style>
  .character-container {
    position: absolute;
    bottom: -20px;
    transform: rotate(20deg);
    margin-top: -55px;
    margin-left: -90px;
    transition: transform 0.1s ease-out;
  }

  .character-container:hover {
    transform: rotate(30deg);
  }
  
  .mt {
    margin-top: 22px;
  }
  .flexColumnContainer {
    display: flex;
    flex-direction: column;
  }

  .user-list {
    overflow-y: scroll;
    max-height: 292px;
  }

  .flexContainer {
    display: flex;
    align-items: flex-end;
    margin-bottom: 12px;
  }

  .usersStatus {
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
    color: white;
    margin-left: 8px;
    font-size: 19px;
    margin-bottom: -4px;
  }

  h2 {
    margin: 0;
    width: 100%;
    font-family: 'EB Garamond', serif;
    font-size: 49px;
    color: #FDFDFB;
    opacity: 0.2;
    line-height: 0.9em;
  }

  .anonymCounter {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-weight: 600;
    font-size: 18px;
    color: white;
  }
  
  #main-container {
    position: relative;
    z-index: 100;
    padding: 24px;
    box-sizing: border-box;
    max-width: 290px;
    background:#2B4039;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
