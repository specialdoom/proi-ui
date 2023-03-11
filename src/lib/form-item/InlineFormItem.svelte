<script lang="ts">
  export let label: string;
  export let error: string = "";
</script>

<div class="proi-form-item__inline">
  <div class="proi-form-item__inline-label">
    <span>{label}</span>
  </div>
  <div class="proi-form-item__inline-control">
    <div class="proi-form-item__inline-control-item">
      <slot />
    </div>
    {#if error !== ""}
      <div class="proi-error">
        {error}
      </div>
    {/if}
  </div>
</div>

<style>
  .proi-form-item__inline {
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    width: 100%;
    gap: 4px;
    padding: 0 4px;
    margin: 8px 0;
  }

  .proi-form-item__inline-label {
    display: inline-block;
    flex-grow: 0;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: middle;
    font-size: 14px;
    font-weight: 500;
    width: 10%;
  }

  .proi-form-item__inline-label span {
    position: relative;
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    height: 32px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
  }

  .proi-form-item__inline-control {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 4px;
  }

  .proi-form-item__inline-control-item {
    height: 32px;
    display: flex;
    align-items: center;
  }

  .proi-error {
    color: var(--r400);
    font-size: 13px;
  }
</style>
