<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Constructor } from "../../utils/types.js";
  import type { ButtonVariant } from "../button.types.js";
  import Button from "../Button.svelte";

  export let props: {
    variant?: ButtonVariant;
    disabled?: boolean;
    block?: boolean;
  } = undefined;

  export let slot: Constructor<SvelteComponent> | HTMLElement | string = undefined;
</script>

<Button {...props}>
  {slot}
</Button>
