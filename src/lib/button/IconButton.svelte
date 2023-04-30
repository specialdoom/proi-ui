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
    outline: 2px solid var(--g800);
    outline-offset: 1px;
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

  .outline {
    color: var(--n600);
    background: var(--bright);
    border: 2px solid var(--n600);
  }

  .outline:hover {
    background: var(--n0);
  }

  .outline:active {
    background: var(--n600);
    color: var(--n0);
  }

  .outline:disabled {
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

  .danger:hover {
    background: var(--r800);
  }

  .danger:active {
    background: var(--r400);
  }

  .danger:disabled {
    color: var(--n600);
    background: var(--r0);
  }

  .ghost {
    background: transparent;
  }

  .proi-icon-button :global(.ghost:hover svg path) {
    stroke: var(--n800);
  }

  .proi-icon-button :global(.ghost:active svg path) {
    stroke: var(--n400);
  }

  .proi-icon-button :global(.primary svg path),
  .proi-icon-button :global(.secondary svg path),
  .proi-icon-button :global(.danger svg path) {
    stroke: var(--n0);
  }

  .proi-icon-button :global(.ghost svg path),
  .proi-icon-button :global(.outline svg path) {
    stroke: var(--n600);
  }

  .proi-icon-button :global(.outline:active svg path) {
    stroke: var(--n0);
  }

  .proi-icon-button :global(.primary:disabled svg path),
  .proi-icon-button :global(.secondary:disabled svg path),
  .proi-icon-button :global(.outline:disabled svg path),
  .proi-icon-button :global(.ghost:disabled svg path),
  .proi-icon-button :global(.danger:disabled svg path) {
    stroke: var(--n400);
  }
</style>
