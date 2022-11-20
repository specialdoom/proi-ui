<script lang="ts">
  import CheckboxCheckmarkIcon from "../icons/CheckboxCheckmarkIcon.svelte";

  export let checked: boolean = false;
  export let disabled: boolean = false;
  export let className: string = "";
</script>

<label class="proi-checkbox-container {className}">
  <input
    type="checkbox"
    bind:checked
    {disabled}
  />
  <div class="proi-checkbox-wrapper">
    <div
      class:checked
      class:disabled
      class="proi-checkbox"
      data-testid="proi-checkbox"
    >
      {#if checked}
        <CheckboxCheckmarkIcon />
      {/if}
    </div>
    <span
      class="proi-checkbox-label"
      data-testid="proi-checkbox-label"
    >
      <slot />
    </span>
  </div>
</label>

<style>
  .proi-checkbox-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    width: fit-content;
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

  .proi-checkbox-wrapper:hover .proi-checkbox {
    background: var(--n0);
  }

  .proi-checkbox.checked {
    background: var(--g600);
    border: unset;
  }

  .proi-checkbox-wrapper:hover .proi-checkbox.checked,
  .proi-checkbox.checked:hover {
    background: var(--g800);
    border: unset;
  }

  .proi-checkbox-wrapper:hover .proi-checkbox.disabled,
  .proi-checkbox.disabled {
    background: var(--n200);
    border: unset;
  }

  .proi-checkbox-container {
    position: relative;
    cursor: pointer;
  }

  .proi-checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .proi-checkbox-label {
    font-size: 16px;
    line-height: 18px;
  }
</style>
