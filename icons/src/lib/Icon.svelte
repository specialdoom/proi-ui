<script lang="ts">
  import { icons } from "./icons";
  import type { IconVariant } from "./icon.types.js";

  export let variant: IconVariant = "proiUi";
  export let color: string = "#000";
  export let scale: number = 20;
</script>

{#if icons[variant]}
  <svg
    data-name={icons[variant].name}
    viewBox="0 0 12 12"
    style="width: {scale}px; height: {scale}px;"
  >
    <title>{icons[variant].name}-icon</title>
    <g data-name="content">
      {#each icons[variant].paths as path}
        <path d={path} style="fill:{color}" />
      {/each}
    </g>
  </svg>
{/if}
