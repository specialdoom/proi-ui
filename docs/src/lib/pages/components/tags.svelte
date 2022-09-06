<script>
  import { Badge, Pill } from "@specialdoom/proi-ui";
  import { config } from "../../configs/components/tags.js";
  import Docs from "../../components/Docs.svelte";
  import FlexContainer from "../../components/display/FlexContainer.svelte";

  const tags = ["pine", "mikado", "flame", "tufts", "vivid", "neutral"];
</script>

<Docs {config}>
  <FlexContainer direction="row">
    {#each tags as tag}
      <Badge variant={tag}>{tag}</Badge>
    {/each}
  </FlexContainer>
  <FlexContainer direction="row">
    {#each tags as tag}
      <Pill variant={tag}>{tag}</Pill>
    {/each}
  </FlexContainer>
</Docs>
