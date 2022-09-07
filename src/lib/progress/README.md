---

[proi-ui](https://github.com/specialdoom/proi-ui)

### Usage

```sveltehtml
<script>
import { Progress, Button } from '@specialdoom/proi-ui';

let percent = 67;
let error = true;
</script>

<Progress {percent} />
<Progress {percent} {error} />
```

### API

| Property | Description                               | Type    | Default |
| -------- | ----------------------------------------- | ------- | ------- |
| percent  | Progress percent                          | number  | 0       |
| error    | Whether there is an error during progress | boolean | false   |
