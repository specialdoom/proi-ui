<script lang="ts">
  import { Avatar } from "@specialdoom/proi-ui";
  import { config } from "$lib/configs/components/avatar";
  import Docs from "$lib/components/Docs.svelte";
</script>

<Docs {config}>
  <Avatar title="Proi Ui" description="Library" />
  <Avatar image="https://avatars.githubusercontent.com/u/41910815?v=4" />
  <Avatar
    title="specialdoom"
    image="https://avatars.githubusercontent.com/u/41910815?v=4"
  />
</Docs>
