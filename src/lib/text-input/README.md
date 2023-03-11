---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### TextInput component

### Usage

```sveltehtml
<script>
import TextInput from '@specialdoom/proi-ui/TextInput.svelte';

let value = "";

function onChange () {
    console.log('changed');
}
</script>

<TextInput bind:value="Value" placeholder="Text input" disabled on:change={onChange}/>
```

### Properties

| Property      | Description                         | Type      | Default |
| ------------- | ----------------------------------- | --------- | ------- |
| `value`       | Value of Input                      | `string`  | `''`    |
| `placeholder` | Placeholder of Input                | `string`  | `''`    |
| `error`       | Whether the Input is in error state | `boolean` | `false` |
| `disabled`    | Whether the Input is disabled       | `boolean` | `false` |

### Forwarded events

`on:change`, `on:keydown`
