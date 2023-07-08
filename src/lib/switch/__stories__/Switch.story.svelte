<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Switch from "../Switch.svelte";
  import {
    checked,
    checkedAndDisabled,
    defaultSource,
    disabled,
    error,
    withLabel
  } from "./switch.source.js";
  import ThemeStory from "../../histoire/ThemeStory.svelte";

  export let Hst: HstType;
</script>

<ThemeStory
  {Hst}
  title="Switch"
  layout={{ type: "grid", width: "50%" }}
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Switch />
  </Hst.Variant>

  <Hst.Variant
    title="With label"
    source={withLabel}
  >
    <Switch>Switch me</Switch>
  </Hst.Variant>

  <Hst.Variant
    title="Checked"
    source={checked}
  >
    <Switch checked>Switch me</Switch>
  </Hst.Variant>

  <Hst.Variant
    title="Error"
    source={error}
  >
    <Switch error>Switch me</Switch>
  </Hst.Variant>

  <Hst.Variant
    title="Disabled"
    source={disabled}
  >
    <Switch disabled>Switch me</Switch>
  </Hst.Variant>

  <Hst.Variant
    title="Checked and disabled"
    source={checkedAndDisabled}
  >
    <Switch
      checked
      disabled
    >
      Switch me
    </Switch>
  </Hst.Variant>
</ThemeStory>
