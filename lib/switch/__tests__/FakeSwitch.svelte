<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Constructor } from "../../utils/types";
  import Switch from "../Switch.svelte";

  export let props: {
    checked?: boolean;
    disabled?: boolean;
    error?: boolean;
  } = undefined;
  export let slot: Constructor<SvelteComponent> | HTMLElement | string = undefined;
</script>

{#if slot}
  <Switch {...props} />
{:else}
  <Switch {...props}>
    {slot}
  </Switch>
{/if}
