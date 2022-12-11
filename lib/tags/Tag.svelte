<script lang="ts">
  import type { TagVariant } from "./tags.types.js";

  export let variant: TagVariant = "pine";
  export let badge: boolean = false;
  export let pill: boolean = false;
  export let label: string = "";
</script>

<span
  class="proi-tag data-display {variant}"
  class:badge
  class:pill
>
  {label}
</span>

<style>
  .proi-tag {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    height: 16px;
    min-width: 16px;
    font-size: 12px;
    line-height: 16px;
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

  .badge {
    border-radius: 4px;
  }

  .pill {
    border-radius: 8px;
  }
</style>
