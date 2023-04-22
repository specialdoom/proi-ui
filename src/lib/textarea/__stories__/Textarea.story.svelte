<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { logEvent } from "histoire/client";
  import Textarea from "../Textarea.svelte";
  import {
    bindValue,
    defaultSource,
    disabled,
    error,
    onChangeEvent,
    onKeyDownEvent,
    withPlaceholder,
    withValue
  } from "./textarea.source.js";

  export let Hst: HstType;

  let value: string = "";
</script>

<Hst.Story
  title="Textarea"
  layout={{ type: "grid", width: "50%" }}
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Textarea />
  </Hst.Variant>

  <Hst.Variant
    title="Disabled state"
    source={disabled}
  >
    <Textarea disabled />
  </Hst.Variant>

  <Hst.Variant
    title="Error state"
    source={error}
  >
    <Textarea error />
  </Hst.Variant>

  <Hst.Variant
    title="With placeholder"
    source={withPlaceholder}
  >
    <Textarea placeholder="Placeholder" />
  </Hst.Variant>

  <Hst.Variant
    title="With value"
    source={withValue}
  >
    <Textarea value="Some value" />
  </Hst.Variant>

  <Hst.Variant
    title="With value"
    source={bindValue}
  >
    Value: {value}
    <Textarea bind:value />
  </Hst.Variant>

  <Hst.Variant
    title="on:keydown event"
    source={onKeyDownEvent}
  >
    <Textarea
      value="Press `Enter` key"
      on:keydown={(e) => logEvent("Enter is pressed!", e)}
    />
  </Hst.Variant>

  <Hst.Variant
    title="on:change event"
    source={onChangeEvent}
  >
    <Textarea
      value="Some value"
      on:keydown={(e) => logEvent("change", e)}
    />
  </Hst.Variant>
</Hst.Story>
