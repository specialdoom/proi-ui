<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Checkbox from "../Checkbox.svelte";
  import { checked, defaultSource, disabled, error } from "./checkbox.source.js";

  export let Hst: HstType;
</script>

<Hst.Story title="Checkbox">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Checkbox>Checkbox</Checkbox>
  </Hst.Variant>

  <Hst.Variant
    title="Checked"
    source={checked}
  >
    <Checkbox checked>Checkbox</Checkbox>
  </Hst.Variant>

  <Hst.Variant
    title="Disabled"
    source={disabled}
  >
    <Checkbox disabled>Checkbox</Checkbox>
  </Hst.Variant>

  <Hst.Variant
    title="Error"
    source={error}
  >
    <Checkbox error>Checkbox</Checkbox>
  </Hst.Variant>
</Hst.Story>
