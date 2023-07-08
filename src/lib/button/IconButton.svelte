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
    outline: 2px solid var(--pi-focus);
  }

  .proi-icon-button:disabled {
    color: var(--pi-text-disabled);
    background: var(--pi-bg-disabled);
  }

  .proi-icon-button:disabled:hover {
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
