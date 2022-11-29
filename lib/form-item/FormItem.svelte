<script lang="ts">
  import InlineFormItem from "./InlineFormItem.svelte";

  export let label: string = "";
  export let description: string = "";
  export let error: string = "";
  export let inline: boolean = false;
</script>

{#if inline}
  <InlineFormItem
    {label}
    {error}
  >
    <slot />
  </InlineFormItem>
{:else}
  <div class="proi-form-item">
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
{/if}

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
  }

  .proi-description {
    font-size: 12px;
  }

  .proi-error {
    color: var(--r400);
    font-size: 13px;
  }
</style>
