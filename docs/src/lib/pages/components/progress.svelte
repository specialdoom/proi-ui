<script>
  import { Progress, Button } from '@specialdoom/proi-ui';
  import Docs from '../../components/Docs.svelte';
  import { config } from '../../configs/components/progress';

  let percent = Math.floor(Math.random() * 100);
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
  <Button on:click={increment}>Increment</Button>
  <Button on:click={decrement}>Decrement</Button>
  <Button on:click={toggleError} outlined>Error</Button>
  <Button on:click={toggleSuccess}>Success</Button>
</Docs>
