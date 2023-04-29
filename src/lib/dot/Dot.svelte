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
    background: red;
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
    background: var(--g600);
    color: var(--n0);
  }

  .flame {
    background: var(--r600);
    color: var(--n0);
  }

  .neutral {
    background: var(--n800);
    color: var(--n0);
  }

  .mikado {
    background: var(--y600);
    color: var(--n800);
  }

  .tufts {
    background: var(--b600);
    color: var(--n0);
  }

  .vivid {
    background: var(--p600);
    color: var(--n0);
  }

  .bright {
    background: var(--n0);
    color: var(--n800);
  }
</style>
