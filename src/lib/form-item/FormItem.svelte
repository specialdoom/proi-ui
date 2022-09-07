<script lang="ts">
  export let label: string = "";
  export let description: string = "";
  export let error: string = "";
</script>

<div class="proi-form-item">
  <span class="proi-label">
    {label}
  </span>
  <span class="proi-description">
    {description}
  </span>
  <slot />
  {#if error !== ""}
    <span class="proi-error">
      {error}
    </span>
  {/if}
</div>

<style>
  .proi-form-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4px;
    margin: 6px 0;
  }

  .proi-label {
    font-size: 14px;
    font-weight: 500;
  }

  .proi-description {
    font-size: 12px;
  }

  .proi-error {
    color: var(--r400);
    font-size: 13px;
  }
</style>
