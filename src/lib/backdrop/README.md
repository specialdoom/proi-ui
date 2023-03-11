---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Backdrop component

### Usage

```sveltehtml
<script>
import { Backdrop, Tag, Button } from '@specialdoom/proi-ui';

let backdrop = false;

function toggleBackdrop() {
    backdrop = !backdrop;
}
</script>

<Button on:click={toggleBackdrop}>Show backdrop</Button>
<Backdrop visible={backdrop} on:click={toggleBackdrop}>
    <Tag>Custom optional content</Tag>
</Backdrop>
```

### Properties

| Property  | Description                     | Type      | Default value |
| --------- | ------------------------------- | --------- | ------------- |
| `visible` | Whether the backdrop is visible | `boolean` | `false`       |

### Forwarded events

`on:click`, `on:keydown`, `on:keyup`
