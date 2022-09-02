<script>
  import { Backdrop, Button, Tag } from '@specialdoom/proi-ui';
  import { config } from '../../configs/components/backdrop.js';
  import Docs from '../../components/Docs.svelte';

  let backdrop = false;

  function toggleBackdrop() {
    backdrop = !backdrop;
  }
</script>

<Docs {config}>
  <Button on:click={toggleBackdrop}>Show backdrop</Button>
  <Backdrop visible={backdrop} on:click={toggleBackdrop}>
    <Tag>Custom optional content</Tag>
  </Backdrop>
</Docs>
