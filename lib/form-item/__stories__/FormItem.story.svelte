<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import FormItem from "../FormItem.svelte";
  import TextInput from "../../input/TextInput.svelte";
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
</script>

<Hst.Story title="FormItem">
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
</Hst.Story>
