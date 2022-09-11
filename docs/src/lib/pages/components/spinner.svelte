<script>
  import { config } from "../../configs/components/spinner.js";
  import Docs from "../../components/Docs.svelte";
  import { Spinner } from "@specialdoom/proi-ui";
  import FlexContainer from "../../components/display/FlexContainer.svelte";
</script>

<Docs {config}>
  <FlexContainer direction="row">
    <Spinner />
    <Spinner label="Custom label..." />
    <Spinner label="A quite long label for this spinner, but who cares?" />
  </FlexContainer>
</Docs>
