<script lang="ts">
  import Logo from "./Logo.svelte";

  export let label: string = "";
</script>

<div class="proi-spinner-container">
  <Logo />
  {#if label}
    {label}
  {/if}
</div>

<style>
  .proi-spinner-container {
    display: flex;
    height: fit-content;
    max-width: 150px;
    word-wrap: break-word;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    gap: 4px;
  }
</style>
