<script>
  import Docs from '../../components/Docs.svelte';
  import { config } from '../../configs/components/dropdown';
  import { Dropdown } from 'proi-ui';

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
  <Dropdown title="Customized dropdown" className="custom-dropdown" />
</Docs>

<style>
  :global(.sd-dropdown.custom-dropdown) {
    border: 1px solid red;
  }
</style>
