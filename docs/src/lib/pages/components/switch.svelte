<script>
  import { Switch } from "@specialdoom/proi-ui";
  import { config } from "../../configs/components/switch.js";
  import Docs from "../../components/Docs.svelte";
  import FlexContainer from "../../components/display/FlexContainer.svelte";

  let checked = false;
</script>

<Docs {config}>
  <FlexContainer alignItems="flex-start">
    <Switch bind:checked>{checked ? "Checked" : "Unchecked"}</Switch>
    <Switch checked={true} disabled>Checked disabled</Switch>
    <Switch checked={false} disabled>Unchecked disabled</Switch>
  </FlexContainer>
</Docs>
