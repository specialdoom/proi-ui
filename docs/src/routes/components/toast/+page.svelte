<script lang="ts">
  import { toaster, Button } from "@specialdoom/proi-ui";
  import { config } from "$lib/configs/components/toast";
  import Docs from "$lib/components/Docs.svelte";

  function notify(variant: any) {
    toaster.send({ message: "Toast message", variant });
  }
</script>

<Docs {config}>
  <Button on:click={() => notify("success")}>Success</Button>
  <Button on:click={() => notify("error")}>Error</Button>
  <Button on:click={() => notify("info")}>Info</Button>
  <Button on:click={() => notify("warning")}>Warning</Button>
  <Button on:click={() => toaster.success("Toast message")}>
    Success method
  </Button>
  <Button
    on:click={() =>
      toaster.error("Toast message asd asda sadsd asd asd asda sd")}
  >
    Error method
  </Button>
  <Button on:click={() => toaster.info("Toast message")}>Info method</Button>
  <Button on:click={() => toaster.warning("Toast message")}>
    Warning method
  </Button>
</Docs>
