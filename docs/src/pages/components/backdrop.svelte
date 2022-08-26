<script lang="ts">
  import { Backdrop, Button, Tag } from '.../../../../src';
  import { config } from '../../configs/components/backdrop';
  import Docs from '../../components/Docs.svelte';

  let backdrop: boolean = false;

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
