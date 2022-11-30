const template = `<script>
  import {FormItem, TextInput} from "@specialdoom/proi-ui";
</script>
`;

export const defaultSource = `${template}
<FormItem label="Label">
  <TextInput placeholder="Input something..." />
</FormItem>
`;

export const inline = `${template}
<FormItem
  label="Label"
  inline
>
  <TextInput
    placeholder="Input something..."
    value="value"
  />
</FormItem>
`;

export const inlineWithError = `${template}
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
`;

export const withLabel = `${template}
<FormItem label="Label">
  <TextInput placeholder="Input something..." />
</FormItem>
`;

export const withDescription = `${template}

<FormItem description="Description">
  <TextInput placeholder="Input something..." />
</FormItem>
`;

export const withLabelAndDescription = `${template}
<FormItem
  label="Label"
  description="Description"
>
  <TextInput placeholder="Input something..." />
</FormItem>
`;

export const withError = `${template}
<FormItem error="Incorrect">
  <TextInput
    placeholder="Input something..."
    error
    value="value"
  />
</FormItem>
`;

export const withLabelDescriptionAndError = `${template}
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
`;
