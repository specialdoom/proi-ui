<script lang="ts">
  import Logo from './Logo.svelte';

  export let label: string = '';
  export let small: boolean = false;
</script>

<span class="sd-spinner-container">
  <Logo {small} />
  {#if label && !small}
    {label}
  {/if}
</span>

<style>
  .sd-spinner-container {
    display: flex;
    max-width: 150px;
    word-wrap: break-word;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 100;
    font-size: 12px;
  }
</style>
