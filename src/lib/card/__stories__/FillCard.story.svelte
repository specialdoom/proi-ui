<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { dataDisplayVariants } from "../../utils/variants.js";
  import { capitalizeFirstLetter } from "../../utils/string.js";
  import FillCard from "../FillCard.svelte";
  import { defaultSource, variantFillCard, withLongerTitle } from "./fill-card.source.js";
  import type { CardVariant } from "../card.types.js";

  export let Hst: HstType;

  let title: string = "Title";
  let description: string = "Description";
  let variant: CardVariant = "pine";
</script>

<Hst.Story
  title="Cards/FillCard"
  layout={{ type: "grid", width: "50%" }}
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <FillCard
      title="Title"
      description="Supporting description for the card goes here like a breeze."
    />
  </Hst.Variant>

  <Hst.Variant title="Playground">
    <FillCard
      {title}
      {description}
      {variant}
    />
    <svelte:fragment slot="controls">
      <Hst.Text
        bind:value={title}
        title="Title"
      />
      <Hst.Text
        bind:value={description}
        title="Description"
      />
      <Hst.Select
        bind:value={variant}
        title="Variant"
        options={dataDisplayVariants.map((x) => ({ label: x, value: x }))}
      />
    </svelte:fragment>
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
