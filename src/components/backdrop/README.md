---
[proi-ui](https://github.com/specialdoom/proi-ui)

### Usage

```javascript
<script>
import { Backdrop } from 'proi-ui'

let backdrop = false;

function toggle(){
    backdrop = !backdrop;
}

</script>

<Backdrop open={backdrop} on:click={toggle} />
<Backdrop open={backdrop} on:click={toggle}>
    Backdrop with content
</Backdrop>
```

### Attributes
| Parameter | Description | Type | Optional value | Default value |
| --- | --- | --- | --- | --- |
| open | Backdrop open | Boolean | - | false |
