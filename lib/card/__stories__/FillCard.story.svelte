<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { dataDisplayVariants } from "../../utils/variants.js";
  import { capitalizeFirstLetter } from "../../utils/string.js";
  import FillCard from "../FillCard.svelte";
  import { defaultSource, variantFillCard, withLongerTitle } from "./fill-card.source.js";

  export let Hst: HstType;
</script>

<Hst.Story title="Cards/FillCard">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <FillCard
      title="Title"
      description="Supporting description for the card goes here like a breeze."
    />
  </Hst.Variant>

  <Hst.Variant
    title="With longer title"
    source={withLongerTitle}
  >
    <FillCard
      title="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
      description="Supporting description for the card goes here like a breeze."
    />
  </Hst.Variant>

  {#each dataDisplayVariants as variant}
    <Hst.Variant
      title="{capitalizeFirstLetter(variant)} variant"
      source={variantFillCard(variant)}
    >
      <FillCard
        {variant}
        title="Title"
        description="Description"
      />
    </Hst.Variant>
  {/each}
</Hst.Story>
