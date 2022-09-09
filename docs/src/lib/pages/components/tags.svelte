<script>
  import { Badge, Pill } from '@specialdoom/proi-ui';
  import { config } from '../../configs/components/tags.js';
  import Docs from '../../components/Docs.svelte';
  import FlexContainer from '../../components/display/FlexContainer.svelte';
  import { dataDisplayVariants } from '../../shared/constants.js';
</script>

<Docs {config}>
  <FlexContainer direction="row">
    {#each dataDisplayVariants as variant}
      <Badge {variant}>{variant}</Badge>
    {/each}
  </FlexContainer>
  <FlexContainer direction="row">
    {#each dataDisplayVariants as variant}
      <Pill {variant}>{variant}</Pill>
    {/each}
  </FlexContainer>
</Docs>
