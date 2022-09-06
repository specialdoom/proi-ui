<script>
  import Docs from "../../components/Docs.svelte";
  import { config } from "../../configs/components/dropdown.js";
  import { Dropdown } from "@specialdoom/proi-ui";
  import FlexContainer from "../../components/display/FlexContainer.svelte";
</script>

<Docs {config}>
  <FlexContainer direction="row">
    <Dropdown
      options={[
        { label: "Label 1", value: "1" },
        { label: "Label 2", value: "2" },
      ]}
      placeholder="Placeholder"
    />
    <Dropdown
      options={[
        { label: "Label 1", value: "1" },
        { label: "Label 2", value: "2" },
      ]}
      placeholder="Dropdown with error"
      error
    />
    <Dropdown
      disabled
      options={[
        { label: "Label 1", value: "1" },
        { label: "Label 2", value: "2" },
      ]}
      placeholder="Disabled dropdown"
    />
  </FlexContainer>
</Docs>
