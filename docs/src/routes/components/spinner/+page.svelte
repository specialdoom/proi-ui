<script lang="ts">
  import { Spinner } from "@specialdoom/proi-ui";
  import { config } from "$lib/configs/components/spinner";
  import Docs from "$lib/components/Docs.svelte";
</script>

<Docs {config}>
  <div style="display: flex;">
    <Spinner small />
    <Spinner />
    <Spinner label="Loading..." />
  </div>
</Docs>
