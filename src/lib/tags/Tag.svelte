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
    height: 20px;
    min-width: 16px;
    font-size: 12px;
    line-height: 16px;
    color: var(--n0);
    padding: 4px 8px;
  }

  .data-display.pine {
    background: var(--pi-pine);
    color: var(--pi-pine-text);
  }

  .data-display.flame {
    background: var(--pi-flame);
    color: var(--pi-flame-text);
  }

  .data-display.neutral {
    background: var(--pi-neutral);
    color: var(--pi-neutral-text);
  }

  .data-display.mikado {
    background: var(--pi-mikado);
    color: var(--pi-mikado-text);
  }

  .data-display.tufts {
    background: var(--pi-tufts);
    color: var(--pi-tufts-text);
  }

  .data-display.vivid {
    background: var(--pi-vivid);
    color: var(--pi-vivid-text);
  }

  .data-display.bright {
    background: var(--pi-inverse);
    color: var(--pi-inverse-text);
    border: 2px solid var(--pi-border-inverse);
  }

  .badge {
    border-radius: 4px;
  }

  .pill {
    border-radius: 10px;
  }
</style>
