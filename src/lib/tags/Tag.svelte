<script lang="ts">
  import type { TagVariant } from "./tags.types.js";

  export let variant: TagVariant = "pine";
  export let badge: boolean = false;
  export let pill: boolean = false;
  export let label: string = "";
</script>

<span
  class="proi-tag {variant}"
  class:badge
  class:pill
  {...$$restProps}
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
    padding: 4px 8px;
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
    background: var(--pi-inverse, #ffffff);
    color: var(--pi-inverse-text, #000000);
    border: 2px solid var(--pi-border-inverse, #000000);
  }

  .badge {
    border-radius: 4px;
  }

  .pill {
    border-radius: 10px;
  }
</style>
