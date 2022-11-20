<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Checkbox from "./Checkbox.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="Checkbox">
  <Hst.Variant title="Default">
    <Checkbox>Checkbox</Checkbox>
  </Hst.Variant>

  <Hst.Variant title="Checked">
    <Checkbox checked={true}>Checkbox</Checkbox>
  </Hst.Variant>

  <Hst.Variant title="Disabled">
    <Checkbox disabled={true}>Checkbox</Checkbox>
  </Hst.Variant>
</Hst.Story>
