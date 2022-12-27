<script lang="ts">
  import type { CardVariant } from "./types.js";

  export let title: string;
  export let description: string;
  export let variant: CardVariant = "pine";
</script>

<div class="proi-card data-display {variant}">
  {#if title}
    <h2 class="proi-card-title">{title}</h2>
  {/if}
  {#if description}
    <div class="proi-card-description">{description}</div>
  {/if}
</div>

<style>
  .proi-card {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background: var(--bright);
    width: 250px;
    gap: 8px;
  }

  .proi-card-title {
    font-size: 16px;
    margin: 0;
  }

  .proi-card-description {
    font-size: 12px;
  }

  .data-display.pine {
    background: var(--g600);
    color: var(--n0);
  }

  .data-display.flame {
    background: var(--r600);
    color: var(--n0);
  }

  .data-display.neutral {
    background: var(--n800);
    color: var(--n0);
  }

  .data-display.mikado {
    background: var(--y600);
    color: var(--n800);
  }

  .data-display.tufts {
    background: var(--b600);
    color: var(--n0);
  }

  .data-display.vivid {
    background: var(--p600);
    color: var(--n0);
  }

  .data-display.bright {
    background: var(--n0);
    color: var(--n800);
  }
</style>
