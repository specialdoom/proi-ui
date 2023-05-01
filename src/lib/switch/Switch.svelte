<script lang="ts">
  export let checked: boolean = false;
  export let disabled: boolean = false;
  export let error: boolean = false;
</script>

<label class="proi-switch-container">
  <input
    tabindex="-1"
    type="checkbox"
    bind:checked
    {disabled}
  />
  <div
    tabindex={disabled ? -1 : 0}
    role="switch"
    aria-checked={checked}
    class:checked
    class:disabled
    class:error
    class="proi-switch"
  >
    <div class="proi-switch-bullet" />
  </div>
  {#if $$slots.default}
    <span class="proi-switch-label">
      <slot />
    </span>
  {/if}
</label>

<style>
  .proi-switch-container {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;
  }

  .proi-switch {
    box-sizing: border-box;
    background: var(--bright);
    height: 18px;
    width: 32px;
    display: inline-flex;
    align-items: center;
    border: 2px solid var(--n200);
    border-radius: 16px;
    padding: 0 2px;
  }

  .proi-switch:focus {
    outline: 2px solid var(--g800);
  }

  .proi-switch:hover {
    background: var(--n0);
  }

  .proi-switch.disabled,
  .proi-switch.checked.disabled {
    background: var(--n200);
  }

  .proi-switch.disabled:hover,
  .proi-switch.checked.disabled:hover {
    background: var(--n200);
  }

  .proi-switch.disabled .proi-switch-bullet {
    background: var(--n0);
  }

  .proi-switch.checked .proi-switch-bullet {
    background: var(--n0);
    transform: translateX(14px);
  }

  .proi-switch.checked {
    border: unset;
    background: var(--g600);
  }

  .proi-switch.checked:hover {
    background: var(--g800);
  }

  .proi-switch.error {
    border: 2px solid var(--r200);
  }

  .proi-switch.error.checked {
    background: var(--r200);
  }

  .proi-switch-bullet {
    height: 11px;
    width: 11px;
    background: var(--n200);
    border-radius: 6px;
    transition: 0.4s;
  }

  .proi-switch-container {
    position: relative;
    cursor: pointer;
  }

  .proi-switch-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .proi-switch.disabled ~ .proi-switch-label {
    color: var(--n400);
  }

  .proi-switch.error ~ .proi-switch-label {
    color: var(--r400);
  }

  .proi-switch-label {
    font-size: 16px;
    line-height: 18px;
  }
</style>
