<script lang="ts">
  import { onDestroy } from "svelte";

  export let color: string;
  export let title: string;
  export let toCopy: string;

  let hover: boolean = false;
  let copied: boolean = false;
  let setTimeoutId = null;

  onDestroy(() => {
    clearTimeout(setTimeoutId);
  });

  function onClick() {
    navigator.clipboard.writeText(toCopy);
    copied = true;
    hover = false;

    setTimeoutId = setTimeout(() => {
      copied = false;
    }, 500);
  }
</script>

<button
  style:background={color}
  class:hover
  {title}
  on:click={onClick}
  on:focus
  on:blur
  on:mouseover={() => (hover = true)}
  on:mouseout={() => (hover = false)}
>
  {#if hover && !copied}
    📋
  {:else if copied}
    ✅
  {/if}
</button>

<style>
  button {
    height: 50px;
    width: 50px;
    display: block;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    outline: none;
    box-shadow: var(--pi-box-shadow);
  }

  .hover {
    opacity: 0.5;
  }
</style>
