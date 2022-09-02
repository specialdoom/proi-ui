<script>
  import Highlight from '../Highlight.svelte';
</script>

<h1>Use styling</h1>
<p>
  In your main svelte app file import <code>proi-ui.css</code> file for styling.
</p>

<div class="small">
  <Highlight
    code={`// main.js
import '@specialdoom/proi-ui/dist/proi-ui.css';

...`}
  />
</div>

<style>
  .small {
    width: 500px;
  }
</style>
