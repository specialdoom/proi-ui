<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Constructor } from "../../utils/types";
  import Alert from "../Alert.svelte";
  import type { AlertVariant } from "../alert.types";

  export let props: {
    title: string;
    closable?: boolean;
    varinat?: AlertVariant;
  };
  export let slot: Constructor<SvelteComponent> | HTMLElement | string;
</script>

<Alert {...props}>
  {slot}
</Alert>
