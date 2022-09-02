<script>
  import { config } from '../../configs/components/spinner';
  import Docs from '../../components/Docs.svelte';
  import { Spinner } from '@specialdoom/proi-ui';
</script>

<Docs {config}>
  <div style="display: flex;">
    <Spinner small />
    <Spinner />
    <Spinner label="Loading..." />
  </div>
</Docs>
