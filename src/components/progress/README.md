---
[proi-ui](https://github.com/specialdoom/proi-ui)

### Usage

```sveltehtml
<script>
import { Progress } from 'proi-ui'

let percent = 20;
let error = false;

</script>

<Progress {precent} {error} height={5} />
```

### Attributes
| Parameter | Description | Type | Optional value | Default value |
| --- | --- | --- | --- | --- |
| percent | Progress percent| Integer | - | 0 |
| error | Error display | Boolean | - | false |
| height | Height of progress (px) | Integer | - | 15 |
