---
[proi-ui](https://github.com/specialdoom/proi-ui)
### Usage
You should bind to Dropdown selected attribute.
```javascript
<script>
import { Dropdown } from 'proi-ui'
let options = ['First option', 'Second option', 'Third option'];

let selected = '';
</script>

<div>
    <Dropdown bind:selected {options} Title="No option slected"/>
</div>
```
### Attributes
| Parameter | Description | Type | Optional value | Default value |
| --- | --- | --- | --- | --- |
| selected | Current selected value | String | - | '' |
| options | Options for select | Array of String | - | [] |
| title | Title for dropdown | String | - | 'Title' |
| disabled | Disable dropdown | Boolean | - | false |