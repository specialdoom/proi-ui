<script lang="ts">
  import { Checkbox } from "@specialdoom/proi-ui";
  import Docs from "$lib/components/Docs.svelte";
  import { config } from "$lib/configs/components/checkbox";

  let checked: boolean = true;
</script>

<Docs {config}>
  <Checkbox bind:checked>{checked ? "Checked" : "Unchecked"}</Checkbox>
  <Checkbox checked={true} disabled>Checked disabled</Checkbox>
  <Checkbox checked={false} disabled>Unchecked disabled</Checkbox>
</Docs>
