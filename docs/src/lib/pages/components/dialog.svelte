<script>
  import { Dialog, Button } from "@specialdoom/proi-ui";
  import { config } from "../../configs/components/dialog.js";
  import Docs from "../../components/Docs.svelte";

  let showDialog = false;
  let showDialog2 = false;

  function toggle() {
    showDialog = !showDialog;
  }
</script>

<Docs {config}>
  <Button on:click={() => (showDialog = !showDialog)}>Show dialog 1</Button>
  <Button on:click={() => (showDialog2 = !showDialog2)}>Show dialog 2</Button>
  <Dialog bind:visible={showDialog} title="Dialog Title">
    Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
    lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud
    impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna aperiam.
  </Dialog>
  <Dialog bind:visible={showDialog2} title="Dialog Title" showActions={false}>
    Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
    lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud
    impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna aperiam.
  </Dialog>
</Docs>
