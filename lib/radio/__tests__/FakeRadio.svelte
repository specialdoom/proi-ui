<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Constructor } from "../../utils/types.js";
  import Radio from "../Radio.svelte";

  export let props: {
    value?: number | string;
    group: number | string;
    disabled?: boolean;
    error?: boolean;
  };
  export let slot: Constructor<SvelteComponent> | HTMLElement | string = undefined;
</script>

{#if slot}
  <Radio {...props}>
    {slot}
  </Radio>
{:else}
  <Radio {...props} />
{/if}
