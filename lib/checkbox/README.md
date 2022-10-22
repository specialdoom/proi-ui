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

<div>
    <Checkbox bind:checked={option}>Label for checkbox</Checkbox>
</div>
```

### API

| Property  | Description                                                                     | Type    | Default |
| --------- | ------------------------------------------------------------------------------- | ------- | ------- |
| checked   | Whether the checkbox is checked                                                 | boolean | false   |
| disabled  | Whether the checkbox is disabled                                                | boolean | false   |
| className | Class name for checkbox container. Checkbox component uses `.sd-checkbox` class | string  | null    |
