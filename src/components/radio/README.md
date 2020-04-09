---
[proi-ui](https://github.com/specialdoom/proi-ui)
### Usage
You should bind to Radio group attribute.
```javascript
<script>
import { Radio } from 'proi-ui'
let options=[
    {text: 'One value', value: 1},
    {text: 'Two value', value: 2},
    {text: 'Three value', value: 3}
]
let radio = 1;


</script>

<div>
    {#each options as option}
        <Radio value={option.value} bing:group={radio} label={option.text} />
    {/each}
</div>
```
### Attributes
| Parameter | description | type | optional value | default value |
| --- | --- | --- | --- | --- |
| value | Value of radio | Integer | - | null |
| group | To bind to | Integer | - | null |
| disabled | disable radio | Boolean | - | false |
| label | Display text| String | - | - |