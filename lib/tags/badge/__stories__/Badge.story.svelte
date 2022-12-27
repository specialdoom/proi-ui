<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { dataDisplayVariants } from "../../../utils/variants.js";
  import { capitalizeFirstLetter } from "../../../utils/string.js";
  import Badge from "../Badge.svelte";
  import { defaultSource, variantBadge, withLabel } from "./badge.source.js";

  export let Hst: HstType;
</script>

<Hst.Story title="Tags/Badge">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Badge />
  </Hst.Variant>

  <Hst.Variant
    title="With label"
    source={withLabel}
  >
    <Badge label="Content" />
  </Hst.Variant>

  {#each dataDisplayVariants as variant}
    {@const title = capitalizeFirstLetter(variant)}
    <Hst.Variant
      title="{title} Badge"
      source={variantBadge(variant)}
    >
      <Badge
        {variant}
        label={title}
      />
    </Hst.Variant>
  {/each}
</Hst.Story>
