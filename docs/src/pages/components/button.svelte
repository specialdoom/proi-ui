<script>
  import { Button } from '.../../../../src';
  import Docs from '../../components/Docs.svelte';
  import { config } from '../../configs/components/button';
</script>

<Docs {config}>
  <Button>Primary</Button>
  <Button type="secondary">Secondary</Button>
  <Button type="link">Link</Button>
  <Button outlined>Primary outlined</Button>
  <Button small>Primary small</Button>
  <Button type="secondary" outlined small>Secondary small</Button>
  <Button disabled>Disabled</Button>
  <Button type="link" disabled>Link disabled</Button>
</Docs>
