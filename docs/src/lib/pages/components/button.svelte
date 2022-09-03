<script>
  import { Button } from '@specialdoom/proi-ui';
  import Docs from '../../components/Docs.svelte';
  import { config } from '../../configs/components/button.js';
</script>

<Docs {config}>
  <Button>Primary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="secondary">Secondary</Button>
  <Button disabled>Primary</Button>
  <Button variant="ghost" disabled>Ghost</Button>
  <Button variant="secondary" disabled>Secondary</Button>
</Docs>
