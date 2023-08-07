<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import InlineFormItem from "../../InlineFormItem.svelte";
  import TextInput from "../../../text-input/TextInput.svelte";
  import ThemeStory from "../../../../__stories__/ThemeStory.svelte";
  import { defaultSource, withError, withLabel } from "./inline-form-item.source.js";

  export let Hst: HstType;
</script>

<ThemeStory
  {Hst}
  title="Form/InlineFormItem"
  layout={{ type: "grid", width: "100%" }}
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <InlineFormItem label="Label">
      <TextInput placeholder="Input something..." />
    </InlineFormItem>
  </Hst.Variant>

  <Hst.Variant
    title="With label"
    source={withLabel}
  >
    <InlineFormItem label="Label">
      <TextInput placeholder="Input something..." />
    </InlineFormItem>
  </Hst.Variant>

  <Hst.Variant
    title="With error"
    source={withError}
  >
    <InlineFormItem
      label="Label"
      error="Incorrect"
    >
      <TextInput
        placeholder="Input something..."
        error
        value="value"
      />
    </InlineFormItem>
  </Hst.Variant>
</ThemeStory>
