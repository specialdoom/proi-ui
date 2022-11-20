<script lang="ts">
  export let label: string = "";
  export let description: string = "";
  export let error: string = "";
</script>

<div
  class="proi-form-item"
  data-testid="proi-form-item"
>
  <span
    class="proi-label"
    data-testid="proi-form-item-label"
  >
    {label}
  </span>
  {#if description !== ""}
    <span class="proi-description">
      {description}
    </span>
  {/if}
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
    padding: 0px 4px;
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
