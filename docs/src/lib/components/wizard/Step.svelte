<script>
  import { step } from './store';

  export let index;
</script>

{#if $step === index}
  <slot />
{/if}
