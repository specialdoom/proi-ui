<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Constructor } from "../../utils/types.js";
  import Dialog from "../Dialog.svelte";

  export let props: {
    visible?: boolean;
    title?: string;
    showActions?: boolean;
  } = undefined;
  export let slot: Constructor<SvelteComponent> | HTMLElement | string = undefined;
</script>

<Dialog {...props}>
  {slot}
</Dialog>
