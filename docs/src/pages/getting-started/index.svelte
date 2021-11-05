<script>
  import { metatags } from '@roxi/routify';
  import Highlight from '../../components/Highlight.svelte';

  metatags.title = 'proi-ui | Getting started';
</script>

<div class="container" style="flex-direction: column">
	<h1>Getting started</h1>
  <ol>
    <li><code>npm i @specialdoom/proi-ui</code></li>
    <li>
      Import <code>proi-ui.css</code> to your main app file
      <Highlight>
        {`// main app file import

import '@specialdoom/proi-ui/dist/proi-ui.css'; 
				
...`}
      </Highlight>
    </li>
    <li>Use a component anywhere
			<Highlight>
        {`<script>
import { Button } from '@specialdoom/proi-ui';
</script>

<Button>New button</Button>`}
      </Highlight>
		</li>
  </ol>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 108px);
  }
</style>
