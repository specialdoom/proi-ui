<script lang="ts">
  import type { TabsContext } from "./tab.types.js";

  import { getContext } from "svelte";
  import { contextName } from "./tabs-context-name.js";

  export let title: string;
  export let index: number;
  export let disabled: boolean = false;

  const { registerPane, current } = getContext<TabsContext>(contextName);

  registerPane({ title, index, disabled });
</script>

{#if $current === index}
  <slot />
{/if}
