<script lang="ts">
  export let placeholder: string = "";
  export let value: string = "";
  export let error: boolean = false;
  export let disabled: boolean = false;
</script>

<input
  {placeholder}
  bind:value
  class="proi-input"
  class:error
  on:change
  on:keydown
  {disabled}
  type="text"
/>

<style>
  .proi-input {
    border: 2px solid var(--pi-border-subtle, #5c5c5c);
    border-radius: 4px;
    width: 100%;
    background: var(--pi-bg, #ffffff);
    height: 32px;
    font-size: 14px;
    padding: 6px 12px;
    box-sizing: border-box;
    line-height: 20px;
    outline: none;
    color: var(--pi-text, #000000);
  }

  .proi-input::placeholder {
    color: var(--pi-text-placeholder, #adadad);
  }

  .proi-input:disabled {
    background: var(--pi-bg-disabled, #d6d6d6);
    color: var(--pi-text-disabled, #adadad);
    border: none;
  }

  .proi-input:disabled:focus,
  .proi-input:disabled:active {
    border: none;
  }

  .proi-input:focus,
  .proi-input:active {
    border: 2px solid var(--pi-focus, #1a6fb6);
  }

  .proi-input.error {
    border: 2px solid var(--pi-border-error, #e35226);
    color: var(--pi-text-error, #e35226);
  }
</style>
