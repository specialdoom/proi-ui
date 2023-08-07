<script lang="ts">
  export let label: string;
  export let description: string = "";
  export let error: string = "";
</script>

<div
  class="proi-form-item"
  {...$$restProps}
>
  <span class="proi-label">
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
    box-sizing: border-box;
    width: 100%;
    gap: 4px;
    padding: 0 4px;
    margin: 8px 0;
  }

  .proi-label {
    font-size: 14px;
    font-weight: 500;
    color: var(--pi-text, #000000);
  }

  .proi-description {
    font-size: 12px;
    color: var(--pi-text-helper, #5c5c5c);
  }

  .proi-error {
    color: var(--pi-text-error, #e35226);
    font-size: 13px;
  }
</style>
