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
Customized progress <br />
<Progress
  {percent}
  {error}
  className="custom-progress"
  lineClassName="custom-line"
/>
<Button small on:click={increment}>Increment</Button>
<Button small on:click={decrement}>Decrement</Button>
<Button small type="secondary" on:click={toggleError} outlined>Error</Button>
<Button small on:click={toggleSuccess}>Success</Button>

<style>
  :global(.sd-progress.custom-progress) {
    height: 10px;
    border-radius: unset;
  }
  :global(.sd-progress .custom-line) {
    background-color: purple;
    border-radius: unset;
  }
</style>
```

### API

| Property      | Description                               | Type    | Default |
| ------------- | ----------------------------------------- | ------- | ------- |
| percent       | Progress percent                          | number  | 0       |
| error         | Whether there is an error during progress | boolean | false   |
| className     | Class name of progress container          | string  | null    |
| lineClassName | Class name of line container              | string  | null    |
