<script>
  import { Alert } from 'proi-ui';

  import { config } from '../configs/components/alert';
  import Docs from './shared/Docs.svelte';
</script>

<Docs {config}>
  <Alert className="custom-class-name">Hey. I've been customized</Alert>
  <Alert>Success alert message</Alert>
  <Alert type="error">Error alert message</Alert>
  <Alert type="info" outlined>Info alert message</Alert>
  <Alert type="warning" closable>Closable alert warning message</Alert>
</Docs>

<style>
  :global(.custom-class-name) {
    height: 50px;
  }
</style>
