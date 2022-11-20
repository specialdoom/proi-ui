<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Radio from "./Radio.svelte";

  export let Hst: HstType;

  let value: number = 0;
</script>

<Hst.Story title="Radio">
  <Hst.Variant title="Default">
    <Radio
      value={0}
      bind:group={value}>Pick me</Radio
    >
  </Hst.Variant>

  <Hst.Variant title="Disabled">
    <Radio
      value={0}
      bind:group={value}
      disabled>Pick me</Radio
    >
  </Hst.Variant>

  <Hst.Variant title="bind:group">
    <Radio
      value={0}
      bind:group={value}>🍎</Radio
    >
    <Radio
      value={1}
      bind:group={value}>🥭</Radio
    >
    <Radio
      value={2}
      bind:group={value}>🍐</Radio
    >
  </Hst.Variant>
</Hst.Story>
