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
