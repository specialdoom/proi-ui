---

[proi-ui](https://github.com/specialdoom/proi-ui)

### Usage

```sveltehtml
<script>
import { Progress, Button } from 'proi-ui';

let percent = 67;
let error = false;

function decrement() {
  percent--;
}
function increment() {
  percent++;
}
function toggleError() {
  error = !error;
}
function toggleSuccess() {
  percent = 100;
}
</script>

<Progress {percent} {error} />
<Button small on:click={increment}>Increment</Button>
<Button small on:click={decrement}>Decrement</Button>
<Button small type="secondary" on:click={toggleError} outlined>Error</Button>
<Button small on:click={toggleSuccess}>Success</Button>
```

### API

| Property | Description                               | Type    | Default |
| -------- | ----------------------------------------- | ------- | ------- |
| percent  | Progress percent                          | number  | 0       |
| error    | Whether there is an error during progress | boolean | false   |
