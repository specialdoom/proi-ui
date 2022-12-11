<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Button from "../../button/Button.svelte";
  import { withLabel } from "../../form-item/__stories__/form-item.source";
  import { capitalizeFirstLetter, dataDisplayVariants } from "../../__stories__/utils";
  import Dot from "../Dot.svelte";
  import { defaultSource, variantDot } from "./dot.source.js";

  export let Hst: HstType;
</script>

<Hst.Story title="Dot">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Dot>
      <Button>Test</Button>
    </Dot>
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
</Hst.Story>
