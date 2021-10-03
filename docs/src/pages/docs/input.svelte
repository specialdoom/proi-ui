<script>
  import { Input } from 'proi-ui';
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
  <Input label="Customized label" value="Disabled" className="custom-input" />
</Docs>

<style>
  :global(.custom-input .sd-input) {
    color: purple;
  }
</style>
