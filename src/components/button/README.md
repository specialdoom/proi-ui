---
[proi-ui](https://github.com/specialdoom/proi-ui)

### Usage
Use content to display text on the button. Default text is _status_ text.
```javascript
<script>
import { Button } from 'proi-ui'

function click () {
    console.log('clicked');
}
</script>

<div>
    <Button on:click={click}>Click</Button>
</div>
```

### Attributes
| Parameter | description | type | optional value | default value |
| --- | --- | --- | --- | --- |
| Status | type | String | primary, info, danger, success, warning | primary |
| Squared | square display | Boolean | - | false |
| Outlined | outline display | Boolean | - | false |

### Events
| Event name | description | callback parameter |
| --- | --- | --- |
| on:click | click to trigger | event |