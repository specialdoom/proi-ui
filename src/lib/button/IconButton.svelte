<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Constructor } from "../utils/types";
  import type { ButtonVariant } from "./button.types";

  export let icon: Constructor<SvelteComponent>;
  export let variant: ButtonVariant = "primary";
  export let disabled: boolean = false;
</script>

<button
  class="proi-icon-button {variant}"
  on:click
  on:keydown
  on:keyup
  on:keypress
  {disabled}
>
  <svelte:component this={icon} />
</button>

<style>
  .proi-icon-button {
    box-sizing: border-box;
    max-width: 32px;
    max-height: 32px;
    border-radius: 4px;
    border: unset;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    user-select: none;
    cursor: pointer;
    padding: unset;
  }

  .proi-icon-button:focus {
    outline: 2px solid var(--pi-focus, #1a6fb6);
  }

  .proi-icon-button:disabled {
    color: var(--pi-text-disabled, #adadad);
    background: var(--pi-bg-disabled, #d6d6d6);
  }

  .proi-icon-button:disabled:hover {
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
