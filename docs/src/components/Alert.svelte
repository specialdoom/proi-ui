<script>
  import { Alert } from 'proi-ui';

  import { config } from '../configs/components/alert';
  import Docs from './shared/Docs.svelte';
</script>

<Docs {config}>
  <Alert>Success alert message</Alert>
  <Alert type="error">Error alert message</Alert>
  <Alert type="info" outlined>Info alert message</Alert>
  <Alert type="warning" closable>Closable alert warning message</Alert>
</Docs>
