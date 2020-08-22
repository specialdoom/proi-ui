---
[proi-ui](https://github.com/specialdoom/proi-ui)

### Usage
Use content to display text on the button. Default text is _status_ text.
```sveltehtml
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
| Parameter | Description | Type | Optional value | Default value |
| --- | --- | --- | --- | --- |
| status | type | String | primary, info, danger, success, warning | primary |
| squared | square display | Boolean | - | false |
| outlined | outline display | Boolean | - | false |
| medium | medium display | Boolean | - | false |

### Events
| Event name | description | callback parameter |
| --- | --- | --- |
| on:click | click to trigger | event |