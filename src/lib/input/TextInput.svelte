<script lang="ts">
  export let placeholder: string = '';
  export let value: string = '';
  export let error: boolean = false;
  export let disabled: boolean = false;
  export let className: string = '';
</script>

<input
  {placeholder}
  bind:value
  class="proi-input {className}"
  class:error
  on:change
  {disabled}
  type="text"
/>

<style>
  .proi-input {
    border: 2px solid var(--n200);
    border-radius: 4px;
    width: 240px;
    height: 32px;
    font-size: 14px;
    padding: 8px 10px;
    box-sizing: border-box;
    outline: none;
  }

  .proi-input:disabled {
    background: var(--n0);
    outline: none;
  }

  .proi-input:disabled:focus,
  .proi-input:disabled:active {
    outline: none;
  }

  .proi-input:focus,
  .proi-input:active {
    outline: 2px solid var(--g200);
  }

  .proi-input.error {
    border: 2px solid var(--r200);
    color: var(--r200);
    outline: none;
  }
</style>
