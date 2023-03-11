---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Backdrop component

### Usage

```sveltehtml
<script>
import Button from '@specialdoom/proi-ui/Button.svelte';
import Backdrop from '@specialdoom/proi-ui/Backdrop.svelte';
import Tag from '@specialdoom/proi-ui/Tag.svelte';


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
