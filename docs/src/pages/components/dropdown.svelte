<script>
  import Docs from '../../components/Docs.svelte';
  import { config } from '../../configs/components/dropdown';
  import { Dropdown } from '../../../../src';

  let options = ['First option', 'Second option', 'Third option'];

  let option = '';
  let defaultSelectedOption = 'First option';
</script>

<Docs {config}>
  <Dropdown bind:selected={option} {options} title="No option selected" />
  <Dropdown
    bind:selected={defaultSelectedOption}
    {options}
    title="No option selected"
  />
  <Dropdown title="Disabled" disabled />
</Docs>