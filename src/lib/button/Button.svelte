<script lang="ts">
  import type { ButtonVariant } from "./button.types.js";
  export let variant: ButtonVariant = "primary";
  export let disabled: boolean = false;
  export let className: string = "";
</script>

<button class="proi-button {variant} {className}" {disabled} on:click>
  <slot />
</button>

<style>
  .proi-button {
    box-sizing: border-box;
    width: auto;
    min-width: 100px;
    height: 32px;
    font-size: 14px;
    padding: 4px 12px;
    border-radius: 4px;
    font-weight: 300;
    border: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    user-select: none;
    cursor: pointer;
  }

  .primary {
    color: var(--n0);
    background: var(--g600);
  }

  .primary:hover {
    background: var(--g800);
  }

  .primary:active {
    background: var(--g400);
  }

  .primary:disabled {
    color: var(--n400);
    background: var(--g0);
  }

  .ghost {
    color: var(--n600);
    background: transparent;
    border: 2px solid var(--n600);
  }

  .ghost:hover {
    background: var(--n0);
  }

  .ghost:active {
    background: var(--n600);
    color: var(--n0);
  }

  .ghost:disabled {
    color: var(--n200);
    background: transparent;
    border-color: var(--n200);
  }

  .secondary {
    color: var(--n0);
    background: var(--r600);
  }

  .secondary:hover {
    background: var(--r800);
  }

  .secondary:active {
    background: var(--r400);
  }

  .secondary:disabled {
    background: var(--r200);
  }
</style>
