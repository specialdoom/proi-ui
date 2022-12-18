const template = `<script>
  import {PasswordInput} from "@specialdoom/proi-ui";
</script>
`;

export const defaultSource = `${template}
<PasswordInput />
`;

export const disabled = `${template}
<PasswordInput disabled />
`;

export const error = `${template}
<PasswordInput error />
`;

export const withPlaceholder = `${template}
<PasswordInput placeholder="Placeholder" />
`;

export const withValue = `${template}
<PasswordInput value="Value" />
`;

export const bindValue = `<script>
import {PasswordInput} from "@specialdoom/proi-ui";

let value = "";
</script>

<PasswordInput bind:value />
`;

export const onKeyDownEvent = `${template}
<PasswordInput
  value="Some value"
  on:keydown={(e) => {
    if (e.key === "Enter") {
        console.log("Enter is pressed!", e);
    }
  }}
/>
`;

export const onChangeEvent = `${template}
<PasswordInput
  value="Some value"
  on:change={(e) => console.log("change", e)}
/>
`;
