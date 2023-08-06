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
  {...$$restProps}
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
    outline: 2px solid var(--pi-focus, #1a6fb6);
  }

  .proi-button:disabled {
    color: var(--pi-text-disabled, #adadad);
    background: var(--pi-bg-disabled, #d6d6d6);
  }

  .proi-button:disabled:hover {
    background: var(--pi-bg-disabled, #d6d6d6);
  }

  .primary {
    color: var(--pi-button-primary-text, #ffffff);
    background: var(--pi-button-primary, #3993dd);
  }

  .primary:hover {
    background: var(--pi-button-primary-hover, #1a6fb6);
  }

  .primary:active {
    background: var(--pi-button-primary-active, #62aae4);
  }

  .outline {
    color: var(--pi-button-outline-text, #000000);
    background: var(--pi-button-outline, inherit);
    border: 2px solid var(--pi-border-inverse, #000000);
  }

  .outline:active {
    background: var(--pi-button-outline-active, #000000);
    color: var(--pi-button-outline-active-text, #ffffff);
  }

  .outline:disabled {
    color: var(--pi-text-disabled, #adadad);
    background: var(--pi-bg, #ffffff);
    border-color: var(--pi-border-disabled, #d6d6d6);
  }

  .secondary {
    color: var(--pi-button-secondary-text, #ffffff);
    background: var(--pi-button-secondary, #873591);
  }

  .secondary:hover {
    background: var(--pi-button-secondary-hover, #690375);
  }

  .secondary:active {
    background: var(--pi-button-secondary-active, #a568ac);
  }

  .danger {
    color: var(--pi-button-danger-text, #ffffff);
    background: var(--pi-button-danger, #e35226);
  }

  .danger:hover {
    background: var(--pi-button-danger-hover, #b53c17);
  }

  .danger:active {
    background: var(--pi-button-danger-active, #e86f4a);
  }

  .ghost {
    color: var(--pi-text, #000000);
    border: 2px solid transparent;
    background: transparent;
  }

  .ghost:disabled {
    background: transparent;
    color: var(--pi-text-disabled, #adadad);
  }

  .ghost:disabled:hover {
    border-color: transparent;
  }

  .link {
    color: var(--pi-link-text, #3993dd);
    background: transparent;
  }

  .link:hover {
    text-decoration: underline;
  }

  .link:disabled {
    color: var(--pi-text-disabled, #adadad);
    background: unset;
    text-decoration: unset;
  }
</style>
