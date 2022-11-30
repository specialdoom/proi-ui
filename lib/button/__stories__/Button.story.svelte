<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Button from "../Button.svelte";
  import { logEvent } from "histoire/client";
  import {
    block,
    danger,
    defaultSource,
    disabled,
    ghost,
    onEvents,
    secondary,
    withGap
  } from "./button.source.js";

  export let Hst: HstType;
</script>

<Hst.Story title="Button">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Button>Click me</Button>
  </Hst.Variant>

  <Hst.Variant
    title="Secondary button"
    source={secondary}
  >
    <Button variant="secondary">Click me</Button>
  </Hst.Variant>

  <Hst.Variant
    title="Ghost button"
    source={ghost}
  >
    <Button variant="ghost">Click me</Button>
  </Hst.Variant>

  <Hst.Variant
    title="Danger button"
    source={danger}
  >
    <Button variant="danger">Click me</Button>
  </Hst.Variant>

  <Hst.Variant
    title="Disabled button"
    source={disabled}
  >
    <Button disabled>Click me</Button>
  </Hst.Variant>

  <Hst.Variant
    title="Block button"
    source={block}
  >
    <Button block>Click me</Button>
  </Hst.Variant>

  <Hst.Variant
    title="With gap between children"
    source={withGap}
  >
    <Button><span>🍕</span> Click me</Button>
  </Hst.Variant>

  <Hst.Variant
    title="With events"
    source={onEvents}
  >
    <Button
      on:click={(event) => logEvent("click", event)}
      on:keyup={(event) => logEvent("keyup", event)}
      on:keydown={(event) => logEvent("keydown", event)}
    >
      Click me
    </Button>
  </Hst.Variant>
</Hst.Story>
