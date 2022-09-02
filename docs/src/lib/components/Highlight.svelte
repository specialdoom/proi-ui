<script>
  import Highlight from 'svelte-highlight';
  import { nord } from 'svelte-highlight/styles';
  export let code = '';
</script>

<svelte:head>
  {@html nord}
</svelte:head>

<Highlight {code} />
