<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import Switch from "./Switch.svelte";

  export let Hst: Hst;
</script>

<Hst.Story title="Switch">
  <Hst.Variant title="Default">
    <Switch />
  </Hst.Variant>

  <Hst.Variant title="With label">
    <Switch>Switch me</Switch>
  </Hst.Variant>

  <Hst.Variant title="Checked">
    <Switch checked>Switch me</Switch>
  </Hst.Variant>

  <Hst.Variant title="Disabled">
    <Switch disabled>Switch me</Switch>
  </Hst.Variant>

  <Hst.Variant title="Checked and disabled">
    <Switch checked disabled>Switch me</Switch>
  </Hst.Variant>
</Hst.Story>
