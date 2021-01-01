<script>
  import Highlight from "svelte-highlight";
  import { typescript } from "svelte-highlight/languages";
  import { nord } from "svelte-highlight/styles";
</script>

<svelte:head>
  {@html nord}
</svelte:head>

<Highlight language={typescript}><slot></slot></Highlight>
