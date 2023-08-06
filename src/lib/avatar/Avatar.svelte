<script lang="ts">
  import type { AvatarVariant } from "./avatar.types.js";

  export let initials: string = "";
  export let variant: AvatarVariant = "pine";
  export let image: string = "";

  $: style =
    image !== "" ? `background: url(${image}) center center/50px 50px no-repeat;` : "";
</script>

<span
  class="proi-avatar {variant}"
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
</style>
