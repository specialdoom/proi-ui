<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Radio from "../Radio.svelte";
  import { bindGroup, checked, defaultSource, disabled, error } from "./radio.source.js";

  export let Hst: HstType;

  let value: number = 0;
</script>

<Hst.Story title="Radio">
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
</Hst.Story>
