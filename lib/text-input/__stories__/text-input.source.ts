const template = `<script>
  import {TextInput} from "@specialdoom/proi-ui";
</script>
`;

export const defaultSource = `${template}
<TextInput />
`;

export const disabled = `${template}
<TextInput disabled />
`;

export const error = `${template}
<TextInput error />
`;

export const withPlaceholder = `${template}
<TextInput error />
`;

export const withValue = `${template}
<TextInput error />
`;

export const bindValue = `<script>
import {TextInput} from "@specialdoom/proi-ui";

let value = "";
</script>

<TextInput bind:value />
`;

export const onKeyDownEvent = `${template}
<TextInput
  value="Some value"
  on:keydown={(e) => {
    if (e.key === "Enter") {
        console.log("Enter is pressed!", e);
    }
  }}
/>
`;

export const onChangeEvent = `${template}
<TextInput
  value="Some value"
  on:change={(e) => console.log("change", e)}
/>
`;
