<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { logEvent } from "histoire/client";
  import PasswordInput from "../PasswordInput.svelte";
  import {
    bindValue,
    defaultSource,
    disabled,
    error,
    onKeyDownEvent,
    withPlaceholder,
    withValue
  } from "./password-input.source.js";

  export let Hst: HstType;

  let value: string = "";
</script>

<Hst.Story title="Inputs/PasswordInput">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <PasswordInput />
  </Hst.Variant>

  <Hst.Variant
    title="Disabled"
    source={disabled}
  >
    <PasswordInput disabled />
  </Hst.Variant>

  <Hst.Variant
    title="Error"
    source={error}
  >
    <PasswordInput error />
  </Hst.Variant>

  <Hst.Variant
    title="With placeholder"
    source={withPlaceholder}
  >
    <PasswordInput placeholder="Placeholder" />
  </Hst.Variant>

  <Hst.Variant
    title="With value"
    source={withValue}
  >
    <PasswordInput value="Value" />
  </Hst.Variant>

  <Hst.Variant
    title="bind:value"
    source={bindValue}
  >
    Value: {value}
    <PasswordInput bind:value />
  </Hst.Variant>

  <Hst.Variant
    title="on:keydown"
    source={onKeyDownEvent}
  >
    <PasswordInput
      value="Some value"
      on:keydown={(e) => {
        if (e.key === "Enter") {
          logEvent("Enter is pressed!", e);
        }
      }}
    />
  </Hst.Variant>

  <Hst.Variant
    title="on:change"
    source={onKeyDownEvent}
  >
    <PasswordInput
      value="Some value"
      on:change={(e) => logEvent("change", e)}
    />
  </Hst.Variant>
</Hst.Story>
