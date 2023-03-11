---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### Textarea component

### Usage

```sveltehtml
<script>
import Textarea from '@specialdoom/proi-ui/Textarea.svelte';

function onChange() {
    console.log('changed');
}
</script>

<Textarea value="Value" placeholder="Text input" disabled on:change={onChange}/>
```

### Properties

| Property      | Description                            | Type      | Default |
| ------------- | -------------------------------------- | --------- | ------- |
| `value`       | Value of Textarea                      | `string`  | `''`    |
| `placeholder` | Placeholder of Textarea                | `string`  | `''`    |
| `error`       | Whether the Textarea is in error state | `boolean` | `false` |
| `disabled`    | Whether the Textarea is disabled       | `boolean` | `false` |
| `rows`        | Number of Textarea rows                | `number`  | `4`     |

### Forwarded events

`on:change`, `on:keydown`
