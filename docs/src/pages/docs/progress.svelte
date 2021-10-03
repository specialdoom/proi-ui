<script>
  import { Progress, Button } from 'proi-ui';
  import Docs from '../../components/Docs.svelte';
  import { config } from '../../configs/components/progress';

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

<Docs {config}>
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
</Docs>

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
