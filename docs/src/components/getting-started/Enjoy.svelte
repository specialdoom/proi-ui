<script>
  import Highlight from '../Highlight.svelte';
</script>

<h1>Enjoy and have fun</h1>
<h2>Basic usage</h2>
<div class="small">
  <Highlight>
    {`<script>
 import { Button } from '@specialdoom/proi-ui';
</script>

<Button>proi-ui button</Button>
`}
  </Highlight>
</div>

<style>
  .small {
    width: 600px;
  }
</style>