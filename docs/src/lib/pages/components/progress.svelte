<script>
  import { Progress, Button } from "@specialdoom/proi-ui";
  import FlexContainer from "../../components/display/FlexContainer.svelte";
  import Docs from "../../components/Docs.svelte";
  import { config } from "../../configs/components/progress";

  let percent = Math.floor(Math.random() * 100);
  let error = false;

  function decrement() {
    if (percent === 0) return;

    percent--;
    error = false;
  }
  function increment() {
    if (percent === 100) return;

    percent++;
    error = false;
  }
  function toggleError() {
    error = !error;
  }
  function toggleSuccess() {
    percent = 100;
  }
</script>

<Docs {config}>
  <FlexContainer>
    <Progress {percent} {error} />
    <FlexContainer direction="row">
      <Button on:click={increment} variant="ghost">+ Increment</Button>
      <Button on:click={decrement} variant="ghost">- Decrement</Button>
      <Button on:click={toggleError}>Error</Button>
      <Button on:click={toggleSuccess}>Success</Button>
    </FlexContainer>
  </FlexContainer>
</Docs>
