const template = `<script>
  import InlineFormItem from "@specialdoom/proi-ui/InlineFormItem.svelte";
  import TextInput from "@specialdoom/proi-ui/TextInput.svelte";
</script>
`;

export const defaultSource = `${template}
<InlineFormItem label="Label">
  <TextInput placeholder="Input something..." />
</InlineFormItem>
`;

export const withLabel = `${template}
<InlineFormItem label="Label">
  <TextInput placeholder="Input something..." />
</InlineFormItem>
`;

export const withError = `${template}
<InlineFormItem error="Incorrect">
  <TextInput
    placeholder="Input something..."
    error
    value="value"
  />
</InlineFormItem>
`;
