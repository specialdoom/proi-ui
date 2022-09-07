<script lang="ts">
  export let label: string = '';
  export let description: string = '';
  export let error: string = '';
</script>

<div class="proi-form-item">
  <span class="proi-label">
    {label}
  </span>
  <span class="proi-description">
    {description}
  </span>
  <slot />
  {#if error}
    <span class="proi-error">
      {error}
    </span>
  {/if}
</div>

<style>
  .proi-form-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: flex-start;
  }

  .proi-description {
    font-size: 12px;
  }

  .proi-label {
    font-size: 14px;
  }

  .proi-error {
    color: var(--r200);
    font-size: 12px;
  }
</style>
