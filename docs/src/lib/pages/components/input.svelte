<script>
  import { TextInput } from '@specialdoom/proi-ui';
  import { config } from '../../configs/components/input.js';
  import Docs from '../../components/Docs.svelte';

  let value = '';

  function onChange() {
    console.log('changed');
  }
</script>

<Docs {config}>
  <TextInput bind:value placeholder="Input something" />
  <TextInput bind:value placeholder="Error state input" error/>
  <TextInput bind:value placeholder="Disabled input" disabled />
</Docs>
