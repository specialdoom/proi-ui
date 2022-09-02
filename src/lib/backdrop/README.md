---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Backdrop component

### Usage

```sveltehtml
<script>
import { Backdrop, Tag, Button } from '@specialdoom/proi-ui';

let backdrop = false;
let customizedBackdrop = false;

function toggleBackdrop() {
    backdrop = !backdrop;
}

function toggleCustomizedBackdrop() {
    customizedBackdrop = !customizedBackdrop;
}
</script>

<Button on:click={toggleBackdrop}>Show backdrop</Button>
<Button on:click={toggleCustomizedBackdrop}>Show customized backdrop</Button>
<Backdrop visible={backdrop} on:click={toggleBackdrop}>
    <Tag>Custom optional content</Tag>
</Backdrop>
<Backdrop
    visible={customizedBackdrop}
    on:click={toggleCustomizedBackdrop}
    className="custom-backdrop"
/>

<style>
  .sd-backdrop.custom-backdrop {
    background-color: rgba(69, 59, 201, 0.411);
  }
</style>
```

### API

| Property  | Description                         | Type            | Default value |
| --------- | ----------------------------------- | --------------- | ------------- |
| visible   | Whether the backdrop is visible     | boolean         | false         |
| className | Class name of backdrop container. Backdrop component uses `.sd-backdrop` class    | string          | `null`        |
| --------- | ----------------------------------- | --------------- | ------------- |
| on:click  | Handler of the backdrop click event | (event) => void | false         |
