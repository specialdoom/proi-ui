<script lang="ts">
  import { Backdrop, Button, Tag } from "@specialdoom/proi-ui";
  import { config } from "$lib/configs/components/backdrop";
  import Docs from "$lib/components/Docs.svelte";

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
