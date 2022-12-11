<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { capitalizeFirstLetter, dataDisplayVariants } from "../../../__stories__/utils";
  import Pill from "../Pill.svelte";
  import { defaultSource, variantPill, withLabel } from "./pill.source.js";

  export let Hst: HstType;
</script>

<Hst.Story title="Tags/Pill">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Pill />
  </Hst.Variant>

  <Hst.Variant
    title="With label"
    source={withLabel}
  >
    <Pill label="Content" />
  </Hst.Variant>

  {#each dataDisplayVariants as variant}
    {@const title = capitalizeFirstLetter(variant)}
    <Hst.Variant
      title="{title} Pill"
      source={variantPill(variant)}
    >
      <Pill
        {variant}
        label={title}
      />
    </Hst.Variant>
  {/each}
</Hst.Story>
