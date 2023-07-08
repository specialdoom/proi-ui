<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Checkbox from "../../checkbox/Checkbox.svelte";
  import Radio from "../Radio.svelte";
  import { bindGroup, checked, defaultSource, disabled, error } from "./radio.source.js";
  import ThemeStory from "../../histoire/ThemeStory.svelte";

  export let Hst: HstType;

  let value: number = 0;

  let label: string = "";
  let isChecked: boolean = false;
  let hasError: boolean = false;
  let isDisabled: boolean = false;
</script>

<ThemeStory
  {Hst}
  title="Radio"
  layout={{ type: "grid", width: "50%" }}
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Radio bind:group={value}>Radio label</Radio>
  </Hst.Variant>

  <Hst.Variant
    title="Checked"
    source={checked}
  >
    <Radio
      {value}
      bind:group={value}
    >
      Radio label
    </Radio>
  </Hst.Variant>

  <Hst.Variant
    title="Disabled"
    source={disabled}
  >
    <Radio
      bind:group={value}
      disabled
    >
      Radio label
    </Radio>
  </Hst.Variant>

  <Hst.Variant
    title="Error"
    source={error}
  >
    <Radio
      bind:group={value}
      error
    >
      Radio label
    </Radio>
  </Hst.Variant>

  <Hst.Variant
    title="bind:group"
    source={bindGroup}
  >
    <Radio
      value={0}
      bind:group={value}
    >
      🍎
    </Radio>
    <Radio
      value={1}
      bind:group={value}
    >
      🥭
    </Radio>
    <Radio
      value={2}
      bind:group={value}
    >
      🍐
    </Radio>
  </Hst.Variant>

  <Hst.Variant title="Playground">
    <Radio
      bind:group={value}
      disabled={isDisabled}
      error={hasError}
    >
      {label}
    </Radio>
    <svelte:fragment slot="controls">
      <Hst.Text
        title="Label"
        bind:value={label}
      />
      <Hst.Checkbox
        title="Has error?"
        bind:value={hasError}
      />
      <Hst.Checkbox
        title="Is disabled?"
        bind:value={isDisabled}
      />
    </svelte:fragment>
  </Hst.Variant>
</ThemeStory>
