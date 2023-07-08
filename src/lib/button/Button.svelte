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
    outline-offset: 1px;
  }

  .block {
    width: 100%;
  }

  .proi-button:focus {
    outline: 2px solid var(--pi-focus);
  }

  .proi-button:disabled {
    color: var(--pi-text-disabled);
    background: var(--pi-bg-disabled);
  }

  .proi-button:disabled:hover {
    background: var(--pi-bg-disabled);
  }

  .primary {
    color: var(--pi-button-primary-text);
    background: var(--pi-button-primary);
  }

  .primary:hover {
    background: var(--pi-button-primary-hover);
  }

  .primary:active {
    background: var(--pi-button-primary-active);
  }

  .outline {
    color: var(--pi-button-outline-text);
    background: var(--pi-button-outline);
    border: 2px solid var(--pi-border-inverse);
  }

  .outline:active {
    background: var(--pi-button-outline-active);
    color: var(--pi-button-outline-active-text);
  }

  .outline:disabled {
    color: var(--pi-text-disabled);
    background: var(--pi-bg);
    border-color: var(--pi-border-disabled);
  }

  .secondary {
    color: var(--pi-button-secondary-text);
    background: var(--pi-button-secondary);
  }

  .secondary:hover {
    background: var(--pi-button-secondary-hover);
  }

  .secondary:active {
    background: var(--pi-button-secondary-active);
  }

  .danger {
    color: var(--pi-button-danger-text);
    background: var(--pi-button-danger);
  }

  .danger:hover {
    background: var(--pi-button-danger-hover);
  }

  .danger:active {
    background: var(--pi-button-danger-active);
  }

  .ghost {
    color: var(--pi-text);
    border: 2px solid transparent;
    background: transparent;
  }

  .ghost:hover {
    border: 2px solid var(--pi-border-inverse);
  }

  .ghost:disabled {
    background: transparent;
    color: var(--pi-text-disabled);
  }

  .ghost:disabled:hover {
    border-color: transparent;
  }

  .link {
    color: var(--pi-link-text);
    background: transparent;
  }

  .link:hover {
    text-decoration: underline;
  }

  .link:disabled {
    color: var(--pi-text-disabled);
    background: unset;
    text-decoration: unset;
  }
</style>
