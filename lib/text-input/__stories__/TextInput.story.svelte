<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { logEvent } from "histoire/client";
  import TextInput from "../TextInput.svelte";
  import {
    defaultSource,
    disabled,
    error,
    onChangeEvent,
    onKeyDownEvent,
    withPlaceholder,
    withValue
  } from "./text-input.source.js";

  export let Hst: HstType;

  let value: string = "";
</script>

<Hst.Story title="Input/TextInput">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <TextInput />
  </Hst.Variant>

  <Hst.Variant
    title="Disabled"
    source={disabled}
  >
    <TextInput disabled />
  </Hst.Variant>

  <Hst.Variant
    title="Error state"
    source={error}
  >
    <TextInput error />
  </Hst.Variant>

  <Hst.Variant
    title="With placeholder"
    source={withPlaceholder}
  >
    <TextInput placeholder="Placeholder" />
  </Hst.Variant>

  <Hst.Variant
    title="With value"
    source={withValue}
  >
    <TextInput value="Some value" />
  </Hst.Variant>

  <Hst.Variant
    title="bind:value"
    source={withValue}
  >
    Value: {value}
    <TextInput bind:value />
  </Hst.Variant>

  <Hst.Variant
    title="on:keydown event"
    source={onKeyDownEvent}
  >
    <TextInput
      value="Some value"
      on:keydown={(e) => {
        if (e.key === "Enter") {
          logEvent("Enter is pressed!", e);
        }
      }}
    />
  </Hst.Variant>

  <Hst.Variant
    title="on:change event"
    source={onChangeEvent}
  >
    <TextInput
      value="Some value"
      on:change={(e) => logEvent("change", e)}
    />
  </Hst.Variant>
</Hst.Story>
