<script lang="ts">
  export let label: string = "";
  export let error: string = "";
</script>

<div>
  <span class="label">
    {label}
  </span>
  <slot />
  {#if error}
    <span class="error">
      {error}
    </span>
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: flex-start;
  }

  .label {
    font-size: 14px;
  }

  .error {
    color: var(--r200);
    font-size: 12px;
  }
</style>
