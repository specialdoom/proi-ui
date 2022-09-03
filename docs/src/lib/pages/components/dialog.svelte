<script>
  import { Dialog, Button } from "@specialdoom/proi-ui";
  import { config } from "../../configs/components/dialog.js";
  import Docs from "../../components/Docs.svelte";

  let showDialog = false;

  function toggle() {
    showDialog = !showDialog;
  }
</script>

<Docs {config}>
  <Button on:click={toggle}>Show dialog</Button>
  <Dialog bind:visible={showDialog} title="Dialog Title" showActions={false}>
    Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
    lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud
    impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna aperiam.
  </Dialog>
</Docs>
