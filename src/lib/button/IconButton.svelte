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

  :global(.ghost:hover svg path) {
    stroke: var(--n800);
  }

  :global(.ghost:active svg path) {
    stroke: var(--n400);
  }

  :global(.primary svg path, .secondary svg path, .danger svg path) {
    stroke: var(--n0);
  }

  :global(.ghost svg path, .outline svg path) {
    stroke: var(--n600);
  }

  :global(.outline:active svg path) {
    stroke: var(--n0);
  }

  :global(
      .primary:disabled svg path,
      .secondary:disabled svg path,
      .outline:disabled svg path,
      .ghost:disabled svg path,
      .danger:disabled svg path
    ) {
    stroke: var(--n400);
  }
</style>
