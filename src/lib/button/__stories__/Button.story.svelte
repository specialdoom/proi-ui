<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Button from "../Button.svelte";
  import { logEvent } from "histoire/client";
  import {
    block,
    defaultSource,
    disabledSource,
    onEvents,
    variantButton,
    withGap
  } from "./button.source.js";
  import { buttonVariants } from "../../utils/variants.js";
  import { capitalizeFirstLetter } from "../../utils/string.js";
  import type { ButtonVariant } from "../button.types";
  import ThemeStory from "../../../__stories__/ThemeStory.svelte";

  export let Hst: HstType;
  let variant: ButtonVariant = "primary";
  let disabled: boolean = false;
  let label: string = "Click me";
</script>

<ThemeStory
  {Hst}
  title="Button"
  layout={{ type: "grid", width: "25%" }}
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Button>Click me</Button>
  </Hst.Variant>

  <Hst.Variant title="Playground">
    <Button
      {variant}
      {disabled}
    >
      {label}
    </Button>
    <svelte:fragment slot="controls">
      <Hst.Text
        bind:value={label}
        title="Label"
      />
      <Hst.Select
        bind:value={variant}
        title="Variant"
        options={buttonVariants.map((x) => ({ label: x, value: x }))}
      />
      <Hst.Checkbox
        title="Disabled"
        bind:value={disabled}
      />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant
    title="Disabled button"
    source={disabledSource}
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

  {#each buttonVariants as variant (variant)}
    <Hst.Variant
      title="{capitalizeFirstLetter(variant)} button"
      source={variantButton(variant)}
    >
      <Button {variant}>Click me</Button>
    </Hst.Variant>
  {/each}
</ThemeStory>
