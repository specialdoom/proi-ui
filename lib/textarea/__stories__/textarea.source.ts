const template = `<script>
  import {Textarea} from "@specialdoom/proi-ui";
</script>
`;

export const defaultSource = `${template}
<Textarea />
`;

export const disabled = `${template}
<Textarea />
`;

export const error = `${template}
<Textarea />
`;

export const withPlaceholder = `${template}
<Textarea />
`;

export const withValue = `${template}
<Textarea />
`;

export const bindValue = `<script>
  import {Textarea} from "@specialdoom/proi-ui";

  let value = "";
</script>

<Textarea bind:value />
`;

export const onChangeEvent = `${template}
<Textarea on:change={() => console.log("change")} />
`;

export const onKeyDownEvent = `${template}
<Textarea on:keyDown={() => console.log("change")} />
`;
