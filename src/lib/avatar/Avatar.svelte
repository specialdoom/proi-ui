<script lang="ts">
  import type { AvatarVariant } from "./avatar.types.js";

  export let initials: string = "";
  export let variant: AvatarVariant = "pine";
  export let image: string = "";

  $: style =
    image !== "" ? `background: url(${image}) center center/50px 50px no-repeat;` : "";
</script>

<span
  class="proi-avatar data-display {variant}"
  {style}
>
  {#if initials !== "" && image === ""}
    {initials}
  {/if}
</span>

<style>
  .proi-avatar {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
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
    border: var(--pi-neutral-border);
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
</style>
