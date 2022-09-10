<script lang="ts">
  export let label: string = "";
  export let description: string = "";
  export let error: string = "";
</script>

<div class="proi-form-item" data-testid="proi-form-item">
  <span class="proi-label" data-testid="proi-form-item-label">
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
  @import "./form-item.css";
</style>
