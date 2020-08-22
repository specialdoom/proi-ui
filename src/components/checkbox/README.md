---
[proi-ui](https://github.com/specialdoom/proi-ui)
### Usage
You should bind to Checkbox checked attribute.
```sveltehtml
<script>
import { Checkbox } from 'proi-ui'
let option = false;

</script>

<div>
    <Checkbox value="Check" bind:checked={option}/>
</div>
```
### Attributes
| Parameter | Description | Type | Optional value | Default value |
| --- | --- | --- | --- | --- |
| Value | display text | String | - | - |
| Checked | option checked or not | Boolean | - | false |
| Disabled | disable checkbox | Boolean | - | false |