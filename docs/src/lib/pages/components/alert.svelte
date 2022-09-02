<script>
  import { Alert } from '@specialdoom/proi-ui';

  import { config } from '../../configs/components/alert';
  import Docs from '../../components/Docs.svelte';
</script>

<Docs {config}>
  <Alert>Success alert message</Alert>
  <Alert variant="error">Error alert message</Alert>
  <Alert variant="info">Info alert message</Alert>
  <Alert variant="warning" closable>Closable alert warning message</Alert>
</Docs>
