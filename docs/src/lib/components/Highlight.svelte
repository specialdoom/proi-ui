<script lang="ts">
  import Highlight from "svelte-highlight";
  import javascript from "svelte-highlight/languages/javascript";
  import css from "svelte-highlight/languages/css";
  import { nord } from "svelte-highlight/styles";
  const languages = {
    javascript: javascript,
    css: css,
  };
  $: language = languages.javascript;
  export let code: any = "";
</script>

<svelte:head>
  {@html nord}
</svelte:head>

<Highlight {language} {code} />
