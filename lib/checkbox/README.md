---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Checkbox component

### Usage

You should bind to Checkbox checked attribute.

```sveltehtml
<script>
  import { Checkbox } from '@specialdoom/proi-ui'
  
  let option = false;
</script>

<Checkbox bind:checked={option}>Label for checkbox</Checkbox>
```

### API

| Property   | Description                            | Type      | Default |
|------------|----------------------------------------|-----------|---------|
| `checked`  | Whether the Checkbox is checked        | `boolean` | `false` |
| `disabled` | Whether the Checkbox is disabled       | `boolean` | `false` |
| `error`    | Whether the Checkbox is in error state | `boolean` | `false` |
