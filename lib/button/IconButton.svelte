<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Constructor } from "../utils/types";
  import type { ButtonVariant } from "./button.types";

  export let icon: Constructor<SvelteComponent>;
  export let variant: ButtonVariant = "primary";
</script>

<button
  class="proi-button {variant}"
  on:click
>
  <svelte:component this={icon} />
</button>

<style>
  .proi-button {
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    font-size: 14px;
    padding: 6px;
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
</style>
