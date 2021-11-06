<script>
  import Highlight from 'svelte-highlight';
  import { javascript } from 'svelte-highlight/languages';
  import { nord } from 'svelte-highlight/styles';
</script>

<svelte:head>
  {@html nord}
</svelte:head>

<Highlight language={javascript}><slot /></Highlight>
