<script lang="ts">
  export let checked: boolean = false;
  export let disabled: boolean = false;
  export let error: boolean = false;
</script>

<label
  class="proi-switch-container"
  {...$$restProps}
>
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
    <div
      class="proi-switch-bullet"
      class:checked
    />
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
    color: var(--pi-text, #000000);
  }

  .proi-switch {
    box-sizing: border-box;
    background: transparent;
    height: 18px;
    width: 32px;
    display: inline-flex;
    align-items: center;
    border: 2px solid var(--pi-border-inverse, #000000);
    border-radius: 16px;
    padding: 0 2px;
  }

  .proi-switch:focus {
    outline: 2px solid var(--pi-focus, #1a6fb6);
    outline-offset: 2px;
  }

  .proi-switch.disabled {
    outline: unset;
    color: var(--pi-text-disabled, #adadad);
    border-color: var(--pi-border-disabled, #d6d6d6);
  }

  .proi-switch.disabled.checked {
    background: var(--pi-bg-disabled, #adadad);
  }

  .proi-switch.checked .proi-switch-bullet {
    background: var(--pi-bg-static, #ffffff);
    transform: translateX(14px);
  }

  .proi-switch.checked {
    border: unset;
    background: var(--pi-bg-interactive, #3993dd);
  }

  .proi-switch.error {
    border: 2px solid var(--pi-border-error, #e35226);
  }

  .proi-switch.error:not(.checked) .proi-switch-bullet {
    background: var(--pi-bg-error, #e35226);
  }

  .proi-switch.error.checked {
    background: var(--pi-bg-error, #e35226);
  }

  .proi-switch-bullet {
    height: 10px;
    width: 10px;
    background: var(--pi-bg-inverse, #000000);
    border-radius: 6px;
    transition: 0.4s;
  }

  .proi-switch-bullet.checked {
    background: var(--pi-bg, #ffffff);
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
    color: var(--pi-text-disabled, #adadad);
  }

  .proi-switch.error ~ .proi-switch-label {
    color: var(--pi-text-error, #e35226);
  }

  .proi-switch-label {
    font-size: 16px;
    line-height: 18px;
  }
</style>
