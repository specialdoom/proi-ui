<script lang="ts">
  import Highlight from '../Highlight.svelte';
</script>

<h1>Theming (optional)</h1>
<p>proi-ui allows you to customize our design tokens to satisfy UI diversity</p>
<h3>Customize in css file</h3>
<p>
  The approach to customize theme is creating a css file within variables to
  override <code>proi-ui.css</code>
</p>

<div class="small">
  <Highlight
    code={`// main.js
import '@specialdoom/proi-ui/dist/proi-ui.css';
import 'override-variables.css';
    
...`}
  />
</div>

<h3>Variables</h3>
<Highlight
  lang="css"
  code={`/* variables */
--sd-primary: #2398ab;
--sd-primary-hover: #2ec1d5;
--sd-primary-selected: #91cbd5;
--sd-secondary: #ee3d48;
--sd-secondary-hover: #f11823;
--sd-link: #5199ff;
--sd-success: #9eecba;
--sd-success-dark: #007f50;
--sd-error: #f3737c;
--sd-error-dark: #ee3d48;
--sd-info: #79aaf3;
--sd-info-dark: #257dff;
--sd-warning: #fadc8d;
--sd-warning-dark: #fdb300;
	
/* colors */
--sd-grey: #808080;
--sd-light-grey: #dee2e6;
--sd-black: #000000;
--sd-white: #ffffff;
--sd-ghost-white: #f8f8ff;`}
/>

<style>
  .small {
    width: 500px;
  }
</style>
