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
    border: 2px solid var(--n200);
    border-radius: 4px;
    width: 100%;
    font-size: 14px;
    padding: 6px 12px;
    box-sizing: border-box;
    line-height: 20px;
    outline: none;
    color: var(--n800);
  }

  .proi-textarea::placeholder {
    color: var(--n400);
  }

  .proi-textarea:disabled {
    background: var(--n200);
    color: var(--n800);
    outline: none;
  }

  .proi-textarea:disabled:focus,
  .proi-textarea:disabled:active {
    outline: none;
  }

  .proi-textarea:focus,
  .proi-textarea:active {
    outline: 2px solid var(--g800);
  }

  .proi-textarea.error {
    border: 2px solid var(--r200);
    background: var(--bright);
    color: var(--r600);
    outline: none;
  }

  .proi-textarea.error::placeholder {
    color: var(--r200);
  }
</style>
