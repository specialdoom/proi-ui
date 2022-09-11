<script>
  import { Alert } from '@specialdoom/proi-ui';
  import FlexContainer from '../../components/display/FlexContainer.svelte';

  import { config } from '../../configs/components/alert.js';
  import Docs from '../../components/Docs.svelte';
</script>

<Docs {config}>
  <FlexContainer>
    <Alert title="Success alert title">Success alert message</Alert>
    <Alert title="Error alert title" variant="error">Error alert message</Alert>
    <Alert title="Info alert title" variant="info">Info alert message</Alert>
    <Alert title="Warning alert title" variant="warning" closable>
      Closable alert warning message
    </Alert>
    <Alert title="Success alert, no description" />
    <Alert title="Success alert, no description" variant="error" closable />
    <Alert title="Success alert, no description" variant="info" />
    <Alert title="Success alert, no description" variant="warning" />
  </FlexContainer>
</Docs>
