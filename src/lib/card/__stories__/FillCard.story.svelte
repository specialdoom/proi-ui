<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { dataDisplayVariants } from "../../utils/variants.js";
  import FillCard from "../FillCard.svelte";
  import {
    closable as closableSource,
    defaultSource,
    variantFillCard
  } from "./fill-card.source.js";
  import type { CardVariant } from "../card.types.js";
  import ThemeStory from "../../../__stories__/ThemeStory.svelte";

  export let Hst: HstType;

  let title: string = "Title";
  let description: string = "Description";
  let variant: CardVariant = "pine";
  let closable: boolean = false;
</script>

<ThemeStory
  {Hst}
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
      {closable}
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
      <Hst.Checkbox
        bind:value={closable}
        title="Closable?"
      />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant
    title="Closable"
    source={closableSource}
  >
    <FillCard
      title="Lorem ipsum"
      description="Supporting description for the card goes here like a breeze."
      closable
    />
  </Hst.Variant>

  <Hst.Variant
    title="Pine variant"
    source={variantFillCard("pine")}
  >
    <FillCard
      variant="pine"
      title="Title"
      description="Description"
    />
  </Hst.Variant>

  <Hst.Variant
    title="Tufts variant"
    source={variantFillCard("tufts")}
  >
    <FillCard
      variant="tufts"
      title="Title"
      description="Description"
    />
  </Hst.Variant>

  <Hst.Variant
    title="Mikado variant"
    source={variantFillCard("mikado")}
  >
    <FillCard
      variant="mikado"
      title="Title"
      description="Description"
    />
  </Hst.Variant>

  <Hst.Variant
    title="Vivid variant"
    source={variantFillCard("vivid")}
  >
    <FillCard
      variant="vivid"
      title="Title"
      description="Description"
    />
  </Hst.Variant>

  <Hst.Variant
    title="Neutral variant"
    source={variantFillCard("neutral")}
  >
    <FillCard
      variant="neutral"
      title="Title"
      description="Description"
    />
  </Hst.Variant>

  <Hst.Variant
    title="Bright variant"
    source={variantFillCard("bright")}
  >
    <FillCard
      variant="bright"
      title="Title"
      description="Description"
    />
  </Hst.Variant>

  <Hst.Variant
    title="Flame variant"
    source={variantFillCard("flame")}
  >
    <FillCard
      variant="flame"
      title="Title"
      description="Description"
    />
  </Hst.Variant>
</ThemeStory>
