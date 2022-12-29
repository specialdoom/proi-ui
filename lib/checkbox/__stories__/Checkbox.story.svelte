<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Checkbox from "../Checkbox.svelte";
  import {
    checkedSource,
    defaultSource,
    disabledSource,
    errorSource
  } from "./checkbox.source.js";

  export let Hst: HstType;

  let label: string = "Check";
  let checked: boolean = false;
  let disabled: boolean = false;
  let error: boolean = false;
</script>

<Hst.Story title="Checkbox">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Checkbox>Checkbox</Checkbox>
  </Hst.Variant>

  <Hst.Variant title="Playground">
    <Checkbox
      {checked}
      {disabled}
      {error}
    >
      {label}
    </Checkbox>
    <svelte:fragment slot="controls">
      <Hst.Text
        bind:value={label}
        title="Label"
      />
      <Hst.Checkbox
        bind:value={checked}
        title="Checked"
      />
      <Hst.Checkbox
        bind:value={disabled}
        title="Disabled"
      />
      <Hst.Checkbox
        bind:value={error}
        title="Error"
      />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant
    title="Checked"
    source={checkedSource}
  >
    <Checkbox checked>Checkbox</Checkbox>
  </Hst.Variant>

  <Hst.Variant
    title="Disabled"
    source={disabledSource}
  >
    <Checkbox disabled>Checkbox</Checkbox>
  </Hst.Variant>

  <Hst.Variant
    title="Error"
    source={errorSource}
  >
    <Checkbox error>Checkbox</Checkbox>
  </Hst.Variant>
</Hst.Story>
