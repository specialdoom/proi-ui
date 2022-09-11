<script>
  import { Checkbox } from "@specialdoom/proi-ui";
  import FlexContainer from "../../components/display/FlexContainer.svelte";
  import Docs from "../../components/Docs.svelte";
  import { config } from "../../configs/components/checkbox.js";

  let checked = true;
</script>

<Docs {config}>
  <FlexContainer direction="row">
    <Checkbox bind:checked>{checked ? "Checked" : "Unchecked"}</Checkbox>
    <Checkbox checked={true} disabled>Checked disabled</Checkbox>
    <Checkbox checked={false} disabled>Unchecked disabled</Checkbox>
  </FlexContainer>
</Docs>
