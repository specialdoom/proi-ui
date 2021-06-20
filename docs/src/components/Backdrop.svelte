<script>
  import { Backdrop, Button, Chip } from 'proi-ui';
  import { config } from '../configs/components/backdrop';
  import Docs from './shared/Docs.svelte';

  let isBackdropVisible = false;
  let isBackdrop2Visible = false;

  function toggleBackdrop() {
    isBackdropVisible = !isBackdropVisible;
  }

  function toggleBackdropWithContent() {
    isBackdrop2Visible = !isBackdrop2Visible;
  }
</script>

<Docs {config}>
  <Button on:click={toggleBackdrop}>Show backdrop</Button>
  <Backdrop visible={isBackdropVisible} on:click={toggleBackdrop} />
  <Button on:click={toggleBackdropWithContent}>
    Show backdrop with custom content
  </Button>
  <Backdrop visible={isBackdrop2Visible} on:click={toggleBackdropWithContent}>
    <Chip />
  </Backdrop>
</Docs>
