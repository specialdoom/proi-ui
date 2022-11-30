---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Button component

### Usage

```sveltehtml
<script>
  import { Button } from '@specialdoom/proi-ui';
</script>

<Button>Click me</Button>
```

### API

| Property   | Description                                                                       | Type      | Default value |
|------------|-----------------------------------------------------------------------------------|-----------|---------------|
| `variant`  | Variant of Button component. Options: `primary`, `secondary`, `ghost` or `danger` | `string`  | `primary`     |
| `disabled` | Whether the button is disabled                                                    | `boolean` | `false`       |
| `block`    | Whether the button should take the entire width of container                      | `boolean` | `false`       |


#### Forwarded events

`on:click` `on:keyup` `on:keydown`