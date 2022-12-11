<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Constructor } from "../../utils/types.js";
  import type { DotVariant } from "../dot.types.js";
  import Dot from "../Dot.svelte";

  export let props: {
    variant: DotVariant;
    label: string;
  } = undefined;
  export let slot: Constructor<SvelteComponent> | HTMLElement | string = undefined;
</script>

<Dot {...props}>
  {slot}
</Dot>
