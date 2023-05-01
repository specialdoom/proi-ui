<script lang="ts">
  import CheckmarkIcon from "../icons/CheckmarkIcon.svelte";

  export let checked: boolean = false;
  export let disabled: boolean = false;
  export let error: boolean = false;
</script>

<label class="proi-checkbox-container">
  <input
    tabindex="-1"
    type="checkbox"
    bind:checked
    {disabled}
  />
  <div
    tabindex={disabled ? -1 : 0}
    role="checkbox"
    aria-checked={checked}
    class:checked
    class:disabled
    class:error
    class="proi-checkbox"
  >
    {#if checked}
      <CheckmarkIcon />
    {/if}
  </div>
  {#if $$slots.default}
    <div class="proi-checkbox-label">
      <slot />
    </div>
  {/if}
</label>

<style>
  .proi-checkbox-container {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;
  }

  .proi-checkbox {
    box-sizing: border-box;
    background: var(--bright);
    height: 18px;
    width: 18px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--n200);
    border-radius: 4px;
  }

  .proi-checkbox:focus {
    outline: 2px solid var(--g800);
  }

  .proi-checkbox.checked {
    background: var(--g600);
    border: unset;
  }

  .proi-checkbox.checked:hover {
    background: var(--g800);
    border: unset;
  }

  .proi-checkbox.disabled {
    background: var(--n200);
    border: unset;
  }

  .proi-checkbox.error {
    border: 2px solid var(--r200);
  }

  .proi-checkbox.error ~ .proi-checkbox-label {
    color: var(--r400);
  }

  .proi-checkbox.error.checked {
    background: var(--r200);
  }

  .proi-checkbox-container {
    position: relative;
    cursor: pointer;
  }

  .proi-checkbox-container input {
    opacity: 0;
    height: 0;
    width: 0;
  }

  .proi-checkbox.disabled ~ .proi-checkbox-label {
    color: var(--n400);
  }

  .proi-checkbox-label {
    font-size: 16px;
    line-height: 18px;
  }
</style>
