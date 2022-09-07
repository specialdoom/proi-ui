<script>
  import Docs from '../../components/Docs.svelte';
  import { config } from '../../configs/components/dropdown.js';
  import { Dropdown } from '@specialdoom/proi-ui';
  import FlexContainer from '../../components/display/FlexContainer.svelte';

  const options = [
    { label: 'Label 1', value: '1' },
    { label: 'Label 2', value: '2' },
    { label: 'Label 3', value: '3' },
    { label: 'Label 4', value: '4' }
  ];
</script>

<Docs {config}>
  <FlexContainer direction="row">
    <Dropdown {options} placeholder="Placeholder" />
    <Dropdown {options} placeholder="Dropdown with error" error />
    <Dropdown disabled {options} placeholder="Disabled dropdown" />
  </FlexContainer>
</Docs>
