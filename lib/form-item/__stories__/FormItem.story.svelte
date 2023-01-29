<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import FormItem from "../FormItem.svelte";
  import TextInput from "../../text-input/TextInput.svelte";
  import {
    defaultSource,
    inline,
    inlineWithError,
    withDescription,
    withError,
    withLabel,
    withLabelAndDescription,
    withLabelDescriptionAndError
  } from "./form-item.source.js";

  export let Hst: HstType;

  let label: string = "Label";
  let description: string = "Description";
  let error: string = "Something went wrong...";
</script>

<Hst.Story
  title="FormItem"
  layout={{ type: "grid", width: "100%" }}
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <FormItem label="Label">
      <TextInput placeholder="Input something..." />
    </FormItem>
  </Hst.Variant>

  <Hst.Variant
    title="Inline"
    source={inline}
  >
    <FormItem
      label="Label"
      inline
    >
      <TextInput
        placeholder="Input something..."
        value="value"
      />
    </FormItem>
  </Hst.Variant>

  <Hst.Variant
    title="Inline with error"
    source={inlineWithError}
  >
    <FormItem
      label="Label"
      error="Invalid"
      inline
    >
      <TextInput
        placeholder="Input something..."
        error
        value="value"
      />
    </FormItem>
  </Hst.Variant>

  <Hst.Variant
    title="With label"
    source={withLabel}
  >
    <FormItem label="Label">
      <TextInput placeholder="Input something..." />
    </FormItem>
  </Hst.Variant>

  <Hst.Variant
    title="With description"
    source={withDescription}
  >
    <FormItem
      label="Label"
      description="Description"
    >
      <TextInput placeholder="Input something..." />
    </FormItem>
  </Hst.Variant>

  <Hst.Variant
    title="With label and description"
    source={withLabelAndDescription}
  >
    <FormItem
      label="Label"
      description="Description"
    >
      <TextInput placeholder="Input something..." />
    </FormItem>
  </Hst.Variant>

  <Hst.Variant
    title="With error"
    source={withError}
  >
    <FormItem
      label="Label"
      error="Incorrect"
    >
      <TextInput
        placeholder="Input something..."
        error
        value="value"
      />
    </FormItem>
  </Hst.Variant>

  <Hst.Variant
    title="With label, description and error"
    source={withLabelDescriptionAndError}
  >
    <FormItem
      label="Label"
      description="Description"
      error="Incorrect"
    >
      <TextInput
        placeholder="Input something..."
        error
        value="value"
      />
    </FormItem>
  </Hst.Variant>

  <Hst.Variant title="Playground">
    <FormItem
      {label}
      {description}
      {error}
    >
      <TextInput
        placeholder="Input something..."
        value="value"
      />
    </FormItem>

    <svelte:fragment slot="controls">
      <Hst.Text
        title="Label"
        bind:value={label}
      />
      <Hst.Text
        title="Description"
        bind:value={description}
      />
      <Hst.Text
        title="Error"
        bind:value={error}
      />
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>
