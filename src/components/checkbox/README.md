---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Checkbox component

### Usage

You should bind to Checkbox checked attribute.

```sveltehtml
<script>
import { Checkbox } from 'proi-ui'
let option = false;

</script>

<div>
    <Checkbox bind:checked={option}>Label for checkbox</Checkbox>
</div>
```

### API

| Property | Description                        | Type    | Default |
| -------- | ---------------------------------- | ------- | ------- |
| checked  | Whether the checkbox it's checked  | Boolean | false   |
| checked  | Whether the checkbox it's disabled | Boolean | false   |
