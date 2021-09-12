<script>
  import { Avatar } from 'proi-ui';
  import { config } from '../configs/components/avatar';
  import Docs from './shared/Docs.svelte';
</script>

<Docs {config}>
  <Avatar title="Proi Ui" description="Library" />
  <Avatar image="https://avatars.githubusercontent.com/u/41910815?v=4" />
  <Avatar
    className="custom-alias-class"
    title="Proi Ui"
    description="Library"
  />
  <Avatar
    title="specialdoom"
    description="creator"
    image="https://avatars.githubusercontent.com/u/41910815?v=4"
  />
</Docs>

<style>
  .custom-alias-class .sd-avatar-alias {
    border: 2px dashed green;
  }
</style>
