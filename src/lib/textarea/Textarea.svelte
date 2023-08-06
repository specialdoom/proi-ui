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
  {...$$restProps}
/>

<style>
  .proi-textarea {
    border: 2px solid var(--pi-border-subtle, #5c5c5c);
    border-radius: 4px;
    width: 100%;
    background: var(--pi-bg, #ffffff);
    font-size: 14px;
    padding: 6px 12px;
    box-sizing: border-box;
    line-height: 20px;
    outline: none;
    color: var(--pi-text, #000000);
  }

  .proi-textarea::placeholder {
    color: var(--pi-text-placeholder, #adadad);
  }

  .proi-textarea:disabled {
    background: var(--pi-bg-disabled, #d6d6d6);
    color: var(--pi-text-disabled, #adadad);
    border: none;
  }

  .proi-textarea:disabled:focus,
  .proi-textarea:disabled:active {
    border: none;
  }

  .proi-textarea:focus,
  .proi-textarea:active {
    border: 2px solid var(--pi-focus, #1a6fb6);
  }

  .proi-textarea.error {
    border: 2px solid var(--pi-border-error, #e35226);
    color: var(--pi-text-error, #e35226);
  }
</style>
