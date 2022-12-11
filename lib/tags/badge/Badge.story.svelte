<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { capitalizeFirstLetter, dataDisplayVariants } from "../../__stories__/utils";
  import Badge from "./Badge.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="Tags/Badge">
  <Hst.Variant title="Default">
    <Badge />
  </Hst.Variant>

  <Hst.Variant title="With content">
    <Badge label="Content" />
  </Hst.Variant>

  {#each dataDisplayVariants as variant}
    {@const title = capitalizeFirstLetter(variant)}
    <Hst.Variant title="{title} Badge">
      <Badge
        {variant}
        label={title}
      />
    </Hst.Variant>
  {/each}
</Hst.Story>
