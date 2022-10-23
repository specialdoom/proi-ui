<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import Backdrop from "./Backdrop.svelte";
  import Badge from "../tags/Badge.svelte";

  export let Hst: Hst;
</script>

<Hst.Story title="Backdrop">
  <Hst.Variant title="Default">
    <Backdrop visible={true}>Backdrop content</Backdrop>
  </Hst.Variant>

  <Hst.Variant title="With custom content">
    <Backdrop visible={true}><Badge>Custom content</Badge></Backdrop>
  </Hst.Variant>
</Hst.Story>
