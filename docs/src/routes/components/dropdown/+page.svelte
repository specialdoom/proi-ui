<script lang="ts">
  import { Dropdown } from "@specialdoom/proi-ui";
  import Docs from "$lib/components/Docs.svelte";
  import { config } from "$lib/configs/components/dropdown";

  let options: string[] = ["First option", "Second option", "Third option"];

  let option: string = "";
  let defaultSelectedOption: string = "First option";
</script>

<Docs {config}>
  <Dropdown bind:selected={option} {options} title="No option selected" />
  <Dropdown
    bind:selected={defaultSelectedOption}
    {options}
    title="No option selected"
  />
  <Dropdown title="Disabled" disabled />
</Docs>
