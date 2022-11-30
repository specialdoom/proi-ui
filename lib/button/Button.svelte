<script lang="ts">
  import type { ButtonVariant } from "./button.types.js";

  export let variant: ButtonVariant = "primary";
  export let disabled: boolean = false;
  export let block: boolean = false;
</script>

<button
  class="proi-button {variant}"
  class:block
  {disabled}
  on:click
  on:keydown
  on:keyup
>
  <slot />
</button>

<style>
  .proi-button {
    box-sizing: border-box;
    width: fit-content;
    height: 32px;
    font-size: 14px;
    padding: 4px 12px;
    border-radius: 4px;
    font-weight: 300;
    border: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    outline: none;
    user-select: none;
    cursor: pointer;
  }

  .block {
    width: 100%;
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
    background: var(--bright);
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
    background: var(--bright);
    border-color: var(--n200);
  }

  .secondary {
    color: var(--n0);
    background: var(--p600);
  }

  .secondary:hover {
    background: var(--p800);
  }

  .secondary:active {
    background: var(--p400);
  }

  .secondary:disabled {
    color: var(--p0);
    background: var(--p200);
  }

  .danger {
    color: var(--n0);
    background: var(--r600);
  }

  .danger:active {
    background: var(--r800);
  }

  .danger:hover {
    background: var(--r400);
  }

  .danger:disabled {
    color: var(--n600);
    background: var(--r0);
  }
</style>
