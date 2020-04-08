---
[proi-ui](https://github.com/specialdoom/proi-ui)
### Usage
You should bind to Checkbox checked attribute.
```javascript
<script>
import { Checkbox } from 'proi-ui'
let option = false;

</script>

<div>
    <Checkbox value="Check" bind:checked={option}/>
</div>
```
### Attributes
| Parameter | description | type | optional value | default value |
| --- | --- | --- | --- | --- |
| Value | display text | String | - | - |
| Checked | option checked or not | Boolean | - | false |