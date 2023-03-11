const template = `<script>
  import Checkbox from "@specialdoom/proi-ui/Checkbox.svelte";
</script>
`;

export const defaultSource = `${template}
<Checkbox>Checkbox label</Checkbox>
`;

export const checkedSource = `${template}
<Checkbox checked>Checkbox label</Checkbox>
`;

export const disabledSource = `${template}
<Checkbox disabled>Checkbox label</Checkbox>
`;

export const errorSource = `${template}
<Checkbox error>Checkbox label</Checkbox>
`;
