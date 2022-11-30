<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Constructor } from "../../utils/types.js";
  import FormItem from "../FormItem.svelte";
  import InlineFormItem from "../InlineFormItem.svelte";

  export let props: {
    label: string;
    description?: string;
    error?: string;
  };
  export let inline: boolean = false;
  export let slot: Constructor<SvelteComponent> | HTMLElement | string;
</script>

{#if inline}
  <InlineFormItem {...props}>
    {slot}
  </InlineFormItem>
{:else}
  <FormItem {...props}>
    {slot}
  </FormItem>
{/if}
