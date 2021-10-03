<script>
  import { Tag } from 'proi-ui';
  import { config } from '../../configs/components/tag';
  import Docs from '../../components/Docs.svelte';
</script>

<Docs {config}>
  <Tag>Tag</Tag>
  <Tag outlined>Tag</Tag>
  <Tag className="custom-tag">Customized Tag</Tag>
</Docs>

<style>
  :global(.sd-tag.custom-tag) {
    background-color: purple;
  }
</style>
