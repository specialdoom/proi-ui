<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Constructor } from "../../utils/types";
  import Backdrop from "../Backdrop.svelte";

  export let props: {
    visible?: boolean;
  } = { visible: false };
  export let slot: Constructor<SvelteComponent> | HTMLElement | string;
</script>

<Backdrop {...props}>
  {slot}
</Backdrop>
