<script lang="ts">
  import type { TabsContext } from "./tab.types.js";

  import { getContext } from "svelte";
  import { contextName } from "./tabs-context-name.js";

  export let title: string;
  export let index: number;
  export let disabled: boolean = false;

  let tabElement: HTMLButtonElement;

  const { current, selectTab } = getContext<TabsContext>(contextName);

  function handleTabClick() {
    if ($current === index) return;
    tabElement.scrollIntoView(false);

    selectTab(index);
  }
</script>

<button
  bind:this={tabElement}
  on:click={handleTabClick}
  class:selected={$current === index}
  {disabled}
>
  {title}
</button>

<style>
  button {
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    min-width: fit-content;
    font-size: 16px;
    color: var(--pi-text);
    background: var(--pi-bg);
    outline: unset;
    border: unset;
    padding: 6px 8px;
    cursor: pointer;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    user-select: none;
  }

  button:focus {
    outline: 2px solid var(--pi-focus);
    outline-offset: -2px;
  }

  button:focus::after {
    opacity: 0;
  }

  button.selected:focus::after {
    opacity: 1;
  }

  button:hover {
    background: var(--pi-bg-hover);
  }

  button:disabled {
    color: var(--pi-text-disabled);
  }

  button:disabled:hover {
    background: var(--pi-bg);
  }

  button::after {
    content: "";
    position: absolute;
    height: 2px;
    background: var(--pi-bg-interactive-subtle);
    width: 100%;
    bottom: 0;
  }

  button.selected::after {
    content: "";
    position: absolute;
    height: 4px;
    border-radius: 2px;
    background: var(--pi-bg-interactive);
    width: 100%;
    bottom: -1px;
  }
</style>
