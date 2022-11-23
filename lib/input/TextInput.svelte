<script lang="ts">
  export let placeholder: string = "";
  export let value: string = "";
  export let error: boolean = false;
  export let disabled: boolean = false;
  export let className: string = "";
</script>

<input
  {placeholder}
  bind:value
  class="proi-input {className}"
  class:error
  on:change
  on:keydown
  {disabled}
  type="text"
/>

<style>
  .proi-input {
    border: 2px solid var(--n200);
    border-radius: 4px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    padding: 6px 12px;
    box-sizing: border-box;
    line-height: 20px;
    outline: none;
    color: var(--n800);
  }

  .proi-input::placeholder {
    color: var(--n400);
  }

  .proi-input:disabled {
    background: var(--n200);
    color: var(--n800);
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
    background: var(--bright);
    color: var(--r600);
    outline: none;
  }

  .proi-input.error::placeholder {
    color: var(--r200);
  }
</style>
