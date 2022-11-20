<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import FormItem from "./FormItem.svelte";
  import TextInput from "../input/TextInput.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="FormItem">
  <Hst.Variant title="Default">
    <FormItem>
      <TextInput placeholder="Input something..." />
    </FormItem>
  </Hst.Variant>

  <Hst.Variant title="With label">
    <FormItem label="Label">
      <TextInput placeholder="Input something..." />
    </FormItem>
  </Hst.Variant>

  <Hst.Variant title="With description">
    <FormItem description="Description">
      <TextInput placeholder="Input something..." />
    </FormItem>
  </Hst.Variant>

  <Hst.Variant title="With label and description">
    <FormItem
      label="Label"
      description="Description"
    >
      <TextInput placeholder="Input something..." />
    </FormItem>
  </Hst.Variant>

  <Hst.Variant title="With error">
    <FormItem error="Incorrect">
      <TextInput
        placeholder="Input something..."
        error
        value="brr"
      />
    </FormItem>
  </Hst.Variant>

  <Hst.Variant title="With label, description and error">
    <FormItem
      label="Label"
      description="Description"
      error="Incorrect"
    >
      <TextInput
        placeholder="Input something..."
        error
        value="brr"
      />
    </FormItem>
  </Hst.Variant>
</Hst.Story>
