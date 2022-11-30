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

<Checkbox {...props}>
  {#if slot}
    {slot}
  {/if}
</Checkbox>
