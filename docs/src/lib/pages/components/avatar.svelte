<script>
  import { Avatar } from '@specialdoom/proi-ui';
  import { config } from '../../configs/components/avatar.js';
  import Docs from '../../components/Docs.svelte';
  import FlexContainer from '../../components/display/FlexContainer.svelte';
</script>

<Docs {config}>
  <FlexContainer direction="row" justifyContent="flex-start">
    <Avatar initials="PI" />
    <Avatar image="https://avatars.githubusercontent.com/u/41910815?v=4" />
    <Avatar.Leo />
  </FlexContainer>
</Docs>
