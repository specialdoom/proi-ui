<script lang="ts">
  import { config } from '../../configs/components/spinner';
  import Docs from '../../components/Docs.svelte';
  import { Spinner } from '../../../../src';
</script>

<Docs {config}>
  <div style="display: flex;">
    <Spinner small />
    <Spinner />
    <Spinner label="Loading..." />
  </div>
</Docs>
