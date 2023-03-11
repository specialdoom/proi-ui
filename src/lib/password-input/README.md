---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### PasswordInput component

### Usage

```sveltehtml
<script>
  import PasswordInput from '@specialdoom/proi-ui/PasswordInput.svelte';

  let value = "";

  function onChange () {
    console.log('changed');
  }
</script>

<PasswordInput bind:value="Value" placeholder="Text input" disabled on:change={onChange}/>
```

### Properties

| Property      | Description                                 | Type      | Default |
| ------------- | ------------------------------------------- | --------- | ------- |
| `value`       | Value of PasswordInput                      | `string`  | `''`    |
| `placeholder` | Placeholder of PasswordInput                | `string`  | `''`    |
| `error`       | Whether the PasswordInput is in error state | `boolean` | `false` |
| `disabled`    | Whether the PasswordInput is disabled       | `boolean` | `false` |

### Forwarded events

`on:change`, `on:keydown`
