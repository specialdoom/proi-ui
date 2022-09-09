<script lang="ts">
  import type { SvelteComponent } from 'svelte';

  export let componentProps: any = {};
  export let component: SvelteComponent;
  export let slot;
</script>

<svelte:component this={component} {...componentProps}>
  {slot}
</svelte:component>
