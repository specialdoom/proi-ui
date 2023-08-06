<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Button from "../../button/Button.svelte";
  import { withLabel } from "../../form-item/__stories__/form-item.source";
  import { dataDisplayVariants } from "../../utils/variants.js";
  import { capitalizeFirstLetter } from "../../utils/string.js";
  import Dot from "../Dot.svelte";
  import { defaultSource, variantDot } from "./dot.source.js";
  import type { DotVariant } from "../dot.types";
  import ThemeStory from "../../../__stories__/ThemeStory.svelte";

  export let Hst: HstType;

  let label: string = "";
  let variant: DotVariant = "pine";
</script>

<ThemeStory
  {Hst}
  title="Dot"
  layout={{ type: "grid", width: "50%" }}
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Dot>
      <Button>Test</Button>
    </Dot>
  </Hst.Variant>

  <Hst.Variant title="Playground">
    <Dot
      {label}
      {variant}
    >
      <Button>Test</Button>
    </Dot>

    <svelte:fragment slot="controls">
      <Hst.Text
        bind:value={label}
        title="Label"
      />
      <Hst.Select
        bind:value={variant}
        title="Variant"
        options={dataDisplayVariants.map((x) => ({ label: x, value: x }))}
      />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant
    title="With label"
    source={withLabel}
  >
    <Dot label="12">
      <Button>Test</Button>
    </Dot>
  </Hst.Variant>

  {#each dataDisplayVariants as variant}
    <Hst.Variant
      title="{capitalizeFirstLetter(variant)} Dot"
      source={variantDot(variant)}
    >
      <Dot {variant}>
        <Button>Test</Button>
      </Dot>
    </Hst.Variant>
  {/each}
</ThemeStory>
