<script>
  import { Avatar } from '@specialdoom/proi-ui';
  import { config } from '../../configs/components/avatar.js';
  import Docs from '../../components/Docs.svelte';
  import FlexContainer from '../../components/display/FlexContainer.svelte';
</script>

<Docs {config}>
  <FlexContainer direction="row" justifyContent="flex-start">
    <Avatar initials="PI" />
    <Avatar image="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg" />
    <Avatar.Leo />
    <Avatar.Nikita />
    <Avatar.Tim />
    <Avatar.Lauren />
  </FlexContainer>
</Docs>
