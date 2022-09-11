<script lang="ts">
  import type { TagVariant } from "./tags.types.js";

  export let variant: TagVariant = "pine";
  export let badge: boolean = false;
  export let pill: boolean = false;
</script>

<span class="proi-tag data-display {variant}" class:badge class:pill>
  <slot />
</span>

<style>
  .proi-tag {
    display: inline-flex;
    align-items: center;
    height: 15px;
    min-width: 15px;
    font-size: 12px;
    color: var(--n0);
    padding: 4px 8px;
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
    background: var(--n0);
    color: var(--n800);
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

  .badge {
    border-radius: 4px;
  }

  .pill {
    border-radius: 8px;
  }
</style>
