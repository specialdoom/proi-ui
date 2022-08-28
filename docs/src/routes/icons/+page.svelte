<script lang="ts">
  import Highlight from "$lib/components/Highlight.svelte";
  import { Input, toaster } from "@specialdoom/proi-ui";

  import { Icon } from "@specialdoom/proi-ui-icons";
  import { icons } from "./icons";

  let searchValue = "";

  function copy(icon: string) {
    let inp = document.createElement("input");
    document.body.appendChild(inp);
    inp.value = `<Icon type="${icon}" />`;
    inp.select();
    navigator.clipboard.writeText(inp.value);
    inp.remove();
    toaster.send({
      message: "Copied to clipboard!",
      variant: "info",
    });
  }

  $: filteredIcons = icons.filter((item) => item.includes(searchValue));
</script>

<svelte:head>
  <title>proi-ui | Icons</title>
</svelte:head>

<div class="container">
  <Highlight code="npm i @specialdoom/proi-ui-icons" />

  <div class="search">
    <Input label="Search icon" bind:value={searchValue} />
  </div>
  <div class="icons-container container">
    {#each filteredIcons as icon}
      <div class="icon-card" on:click={() => copy(icon)}>
        <Icon variant={icon} scale={30} />
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .icons-container {
    flex-wrap: wrap;
    flex-direction: row;
  }

  .icon-card {
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
  }

  .icon-card:hover {
    box-shadow: 0px 0px 31px 9px rgba(0, 0, 0, 0.37);
    cursor: pointer;
  }

  .search {
    width: 50%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
</style>
