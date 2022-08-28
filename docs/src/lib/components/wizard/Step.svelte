<script lang="ts">
  import { step } from './store';

  export let index: number;
</script>

{#if $step === index}
  <slot />
{/if}
