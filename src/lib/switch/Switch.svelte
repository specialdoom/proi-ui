<script lang="ts">
  export let checked: boolean = false;
  export let disabled: boolean = false;
</script>

<label class="proi-switch-container">
  <input type="checkbox" bind:checked {disabled} />
  <div class="proi-switch-wrapper">
    <div class:checked class:disabled class="proi-switch">
      <div class="proi-switch-bullet" />
    </div>
    <span class="proi-switch-label">
      <slot />
    </span>
  </div>
</label>

<style>
  .proi-switch-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    width: fit-content;
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

  .proi-switch-label {
    font-size: 16px;
    line-height: 18px;
  }
</style>
