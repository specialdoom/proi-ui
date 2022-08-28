<script lang="ts">
  import { Alert } from "@specialdoom/proi-ui";

  import { config } from "$lib/configs/components/alert";
  import Docs from "$lib/components/Docs.svelte";
</script>

<Docs {config}>
  <Alert>Success alert message</Alert>
  <Alert variant="error">Error alert message</Alert>
  <Alert variant="info" outlined>Info alert message</Alert>
  <Alert variant="warning" closable>Closable alert warning message</Alert>
</Docs>
