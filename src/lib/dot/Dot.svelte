<script lang="ts">
  import type { DotVariant } from "./dot.types.js";

  export let variant: DotVariant = "flame";
  export let label: string = "";
</script>

<div class="proi-dot-container">
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
    background: var(--pi-pine);
    color: var(--pi-pine-text);
  }

  .flame {
    background: var(--pi-flame);
    color: var(--pi-flame-text);
  }

  .neutral {
    background: var(--pi-neutral);
    color: var(--pi-neutral-text);
  }

  .mikado {
    background: var(--pi-mikado);
    color: var(--pi-mikado-text);
  }

  .tufts {
    background: var(--pi-tufts);
    color: var(--pi-tufts-text);
  }

  .vivid {
    background: var(--pi-vivid);
    color: var(--pi-vivid-text);
  }

  .bright {
    line-height: 8px;
    background: var(--pi-bg);
    color: var(--pi-text);
    border: 2px solid var(--pi-border-inverse);
  }
</style>
