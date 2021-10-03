<script>
  import { Backdrop, Button, Tag } from 'proi-ui';
  import { config } from '../../configs/components/backdrop';
  import Docs from '../../components/Docs.svelte';

  let backdrop = false;
  let customizedBackdrop = false;

  function toggleBackdrop() {
    backdrop = !backdrop;
  }

  function toggleCustomizedBackdrop() {
    customizedBackdrop = !customizedBackdrop;
  }
</script>

<Docs {config}>
  <Button on:click={toggleBackdrop}>Show backdrop</Button>
  <Button on:click={toggleCustomizedBackdrop}>Show customized backdrop</Button>
  <Backdrop visible={backdrop} on:click={toggleBackdrop}>
    <Tag>Custom optional content</Tag>
  </Backdrop>
  <Backdrop
    visible={customizedBackdrop}
    on:click={toggleCustomizedBackdrop}
    className="custom-backdrop"
  />
</Docs>

<style>
  :global(.sd-backdrop.custom-backdrop) {
    background-color: rgba(69, 59, 201, 0.411);
  }
</style>
