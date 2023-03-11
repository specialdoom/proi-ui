<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";

  export let Hst: HstType;

  interface Variant {
    color: string;
    background: string;
    name: string;
  }

  const alertVariants: Variant[] = [
    { color: "--g800", background: "--g0", name: "success" },
    { color: "--b800", background: "--b0", name: "info" },
    { color: "--r800", background: "--r0", name: "error" },
    { color: "--y800", background: "--y0", name: "warning" }
  ];
  const toastVariants: Variant[] = [
    { color: "--g800", background: "--bright", name: "success" },
    { color: "--b800", background: "--bright", name: "info" },
    { color: "--r800", background: "--bright", name: "error" },
    { color: "--y800", background: "--bright", name: "warning" }
  ];
  const dataDisplayVariants: Variant[] = [
    { color: "--n0", background: "--g600", name: "pine" },
    { color: "--n800", background: "--y600", name: "mikado" },
    { color: "--n0", background: "--p600", name: "vivid" },
    { color: "--n0", background: "--b600", name: "tufts" },
    { color: "--n0", background: "--r600", name: "flame" },
    { color: "--n0", background: "--n800", name: "neutral" },
    { color: "--n800", background: "--n0", name: "bright" }
  ];
</script>

<Hst.Story
  title="Variants"
  group="b"
>
  <div class="cards-container">
    {#each alertVariants as alertVariant}
      <div
        class="card"
        style:color="var({alertVariant.color})"
        style:background="var({alertVariant.background})"
      >
        {alertVariant.name}
      </div>
    {/each}
  </div>
  <div class="cards-container">
    {#each dataDisplayVariants as dataDisplayVariant}
      <div
        class="card"
        style:color="var({dataDisplayVariant.color})"
        style:background="var({dataDisplayVariant.background})"
      >
        {dataDisplayVariant.name}
      </div>
    {/each}
  </div>
  <div class="cards-container">
    {#each toastVariants as toastVariant}
      <div
        class="card"
        style:color="var({toastVariant.color})"
        style:border-left="4px solid var({toastVariant.color})"
        style:background="var({toastVariant.background})"
      >
        {toastVariant.name}
      </div>
    {/each}
  </div>
</Hst.Story>

<style>
  .cards-container {
    box-sizing: border-box;
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .card {
    height: 100px;
    width: 100px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
