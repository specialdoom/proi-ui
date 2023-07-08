<script lang="ts">
  export let placeholder: string = "";
  export let value: string = "";
  export let error: boolean = false;
  export let disabled: boolean = false;
  export let rows: number = 4;
</script>

<textarea
  {placeholder}
  bind:value
  class="proi-textarea"
  class:error
  {rows}
  {disabled}
  on:change
  on:keydown
/>

<style>
  .proi-textarea {
    border: 2px solid var(--pi-border-subtle);
    border-radius: 4px;
    width: 100%;
    background: var(--pi-bg);
    font-size: 14px;
    padding: 6px 12px;
    box-sizing: border-box;
    line-height: 20px;
    outline: none;
    color: var(--pi-text);
  }

  .proi-textarea::placeholder {
    color: var(--pi-text-placeholder);
  }

  .proi-textarea:disabled {
    background: var(--pi-bg-disabled);
    color: var(--pi-text-disabled);
    border: none;
  }

  .proi-textarea:disabled:focus,
  .proi-textarea:disabled:active {
    border: none;
  }

  .proi-textarea:focus,
  .proi-textarea:active {
    border: 2px solid var(--pi-focus);
  }

  .proi-textarea.error {
    border: 2px solid var(--pi-border-error);
    color: var(--pi-text-error);
  }
</style>
