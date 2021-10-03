<script>
  import { Button } from 'proi-ui';
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
  <Button className="custom-button">Customized button</Button>
</Docs>

<style>
  :global(.sd-button.custom-button) {
    --sd-primary: rgb(105, 34, 99);
    --sd-primary-hover: rgb(146, 47, 138);
    border-radius: 25px;
  }
</style>
