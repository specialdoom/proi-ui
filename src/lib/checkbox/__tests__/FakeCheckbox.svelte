<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Constructor } from "../../utils/types";
  import Checkbox from "../Checkbox.svelte";

  export let props: {
    checked?: boolean;
    disabled?: boolean;
    error?: boolean;
  } = undefined;
  export let slot: Constructor<SvelteComponent> | HTMLElement | string = undefined;
</script>

{#if slot}
  <Checkbox {...props}>
    {slot}
  </Checkbox>
{:else}
  <Checkbox {...props} />
{/if}
