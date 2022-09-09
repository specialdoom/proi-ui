<script>
  import { config } from '../../configs/components/toast';
  import Docs from '../../components/Docs.svelte';
  import { toaster, Button, Dropdown, TextInput } from '@specialdoom/proi-ui';
  import FlexContainer from '../../components/display/FlexContainer.svelte';

  const variants = [
    {
      value: 'error',
      label: 'Error toast'
    },
    {
      value: 'success',
      label: 'Success toast'
    },
    {
      value: 'info',
      label: 'Info toast'
    },
    {
      value: 'warning',
      label: 'Warning toast'
    }
  ];
  let variant;
  let title;
  let message;

  function notify(variant = 'success', title = 'Default title', message) {
    toaster.send({
      variant,
      title,
      message
    });
  }
</script>

<Docs {config}>
  <FlexContainer alignItems="flex-start" width="240px">
    <Dropdown
      bind:value={variant}
      options={variants}
      placeholder="Select toast variant"
    />
    <TextInput bind:value={title} placeholder="Toast title" />
    <TextInput bind:value={message} placeholder="Toast message (optional)" />
    <Button
      variant="secondary"
      on:click={() => notify(variant, title, message)}
      block
    >
      Toast a slice
    </Button>
  </FlexContainer>
</Docs>
