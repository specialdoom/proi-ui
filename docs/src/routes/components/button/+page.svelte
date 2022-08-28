<script lang="ts">
  import { Button } from "@specialdoom/proi-ui";
  import Docs from "$lib/components/Docs.svelte";
  import { config } from "$lib/configs/components/button";
</script>

<Docs {config}>
  <Button>Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="link">Link</Button>
  <Button outlined>Primary outlined</Button>
  <Button small>Primary small</Button>
  <Button variant="secondary" outlined small>Secondary small</Button>
  <Button disabled>Disabled</Button>
  <Button variant="link" disabled>Link disabled</Button>
</Docs>
