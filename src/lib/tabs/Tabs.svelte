<script lang="ts">
  import type { TabsContext, Pane } from "./tab.types.js";

  import { setContext, onMount } from "svelte";
  import { writable } from "svelte/store";
  import ScrollButton from "./ScrollButton.svelte";
  import Tab from "./Tab.svelte";
  import { contextName } from "./tabs-context-name.js";

  let panes = writable<Pane[]>([]);
  let current = writable<number>(0);
  let tabsContainerElement: HTMLDivElement;
  let elementOverflows: boolean = false;

  setContext<TabsContext>(contextName, {
    registerPane(pane: Pane) {
      panes.set([...$panes, pane]);
      current.set($panes.filter((p) => !p.disabled)[0]?.index ?? 0);
    },

    selectTab(index: number) {
      current.set(index);
    },

    current,
  });

  onMount(() => {
    if (!tabsContainerElement) return;

    console.log(
      tabsContainerElement.scrollWidth,
      tabsContainerElement.clientWidth
    );

    if (tabsContainerElement.scrollWidth > tabsContainerElement.clientWidth) {
      elementOverflows = true;
    }
  });
</script>

<div class="proi-tabs-container">
  <ScrollButton
    bind:visible={elementOverflows}
    direction="left"
    on:click={() => {
      tabsContainerElement.scrollLeft -= 300;
    }}
  />
  <div class="proi-tabs" bind:this={tabsContainerElement}>
    {#each $panes as pane, index}
      <Tab {index} title={pane.title} disabled={pane.disabled} />
    {/each}
  </div>
  <ScrollButton
    bind:visible={elementOverflows}
    direction="right"
    on:click={() => {
      tabsContainerElement.scrollLeft += 300;
    }}
  />
</div>
<slot />

<style>
  div.proi-tabs-container {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .proi-tabs {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding-bottom: 4px;
  }

  .proi-tabs::-webkit-scrollbar {
    height: 0;
  }
</style>
