---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Dot component

### Usage

```sveltehtml
<script>
  import Button from '@specialdoom/proi-ui/Button.svelte';
  import Dot from '@specialdoom/proi-ui/Dot.svelte';
</script>

<Dot>
    <Button>Test</Button>
</Dot>
```

### Properties

| Property  | Description                                                                             | Type     | Default value |
| --------- | --------------------------------------------------------------------------------------- | -------- | ------------- |
| `label`   | Label of Dot component                                                                  | `string` | `""`          |
| `variant` | Variant of Dot component. Options: `pine, neutral, makido, vivid, flame, tufts, bright` | `string` | `'pine'`      |

### Slots

| Name      | Description                             | Falback     |
| --------- | --------------------------------------- | ----------- |
| `default` | Component to set the Dot component over | no fallback |
