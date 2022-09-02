<script>
  import { Input } from '@specialdoom/proi-ui';
  import { config } from '../../configs/components/input';
  import Docs from '../../components/Docs.svelte';

  function onChange() {
    console.log('changed');
  }
</script>

<Docs {config}>
  <Input label="Custom label" value="Custom value" on:change={onChange} />
  <Input
    label="Error label"
    value="Error value"
    error="Something is wrong..."
  />
  <Input label="Disabled input" value="Disabled" disabled />
</Docs>
