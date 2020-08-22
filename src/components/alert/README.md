---
[proi-ui](https://github.com/specialdoom/proi-ui)

###### Alert component

### Usage

```sveltehtml
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
| status | Alert type | String | info, error, success, warning | success |
| squared | Squared display | Boolean | - | false |
| closable | Closable alert | Boolean | - | false |
| outlined | Outlined display | Boolean | - | false |
