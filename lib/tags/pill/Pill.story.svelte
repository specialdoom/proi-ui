<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { capitalizeFirstLetter, dataDisplayVariants } from "../../__stories__/utils.js";
  import Pill from "./Pill.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="Tags/Pill">
  <Hst.Variant title="Default">
    <Pill />
  </Hst.Variant>

  <Hst.Variant title="With content">
    <Pill label="Content" />
  </Hst.Variant>

  {#each dataDisplayVariants as variant}
    {@const title = capitalizeFirstLetter(variant)}
    <Hst.Variant title="{title} Pill">
      <Pill
        {variant}
        label={title}
      />
    </Hst.Variant>
  {/each}
</Hst.Story>
