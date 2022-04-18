<script>
  import Highlight from 'svelte-highlight';
  import javascript from 'svelte-highlight/languages/javascript';
  import css from "svelte-highlight/languages/css";
  import { nord } from 'svelte-highlight/styles';
  const languages = {
    javascript: javascript,
    css: css
  };
  export let lang = 'javascript';
  export let code = '';
</script>

<svelte:head>
  {@html nord}
</svelte:head>

<Highlight language={languages[lang]} {code} />
