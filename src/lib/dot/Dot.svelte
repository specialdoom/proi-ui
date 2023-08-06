<script lang="ts">
  import type { DotVariant } from "./dot.types.js";

  export let variant: DotVariant = "flame";
  export let label: string = "";
</script>

<div
  class="proi-dot-container"
  {...$$restProps}
>
  <span class="proi-dot {variant}">
    {label}
  </span>
  <slot />
</div>

<style>
  .proi-dot-container {
    position: relative;
    width: fit-content;
  }

  .proi-dot {
    position: absolute;
    height: 12px;
    min-width: 12px;
    padding: 0 4px;
    box-sizing: border-box;
    border-radius: 6px;
    line-height: 12px;
    font-size: 8px;
    text-align: center;
    top: 0;
    right: 0;
    z-index: 5;
    transform: scale(1) translate(50%, -50%);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .pine {
    background: var(--pi-pine, #479a89);
    color: var(--pi-pine-text, #ffffff);
  }

  .flame {
    background: var(--pi-flame, #e35226);
    color: var(--pi-flame-text, #ffffff);
  }

  .neutral {
    background: var(--pi-neutral, #000000);
    color: var(--pi-neutral-text, #ffffff);
  }

  .mikado {
    background: var(--pi-mikado, #ffc71f);
    color: var(--pi-mikado-text, #000000);
  }

  .tufts {
    background: var(--pi-tufts, #1a6fb6);
    color: var(--pi-tufts-text, #ffffff);
  }

  .vivid {
    background: var(--pi-vivid, #873591);
    color: var(--pi-vivid-text, #ffffff);
  }

  .bright {
    line-height: 8px;
    background: var(--pi-bg, #ffffff);
    color: var(--pi-text, #000000);
    border: 2px solid var(--pi-border-inverse, #000000);
  }
</style>
