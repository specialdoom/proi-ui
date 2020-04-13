---
[proi-ui](https://github.com/specialdoom/proi-ui)

### Usage

```javascript
<script>
import { Alert } from 'proi-ui'

</script>

<div>
    <Alert>Alert success message</Alert>
    <Alert status="error" squared>Alert error message</Alert>
</div>
```

### Attributes
| Parameter | Description | Type | Optional value | Default value |
| --- | --- | --- | --- | --- |
| status | type | String | info, error, success, warning | success |
| squared | square display | Boolean | - | false |
| closable | closable alert | Boolean | - | false |
