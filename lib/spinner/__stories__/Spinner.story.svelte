<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Spinner from "../Spinner.svelte";
  import { defaultSource, withLabel } from "./spinner.source.js";

  export let Hst: HstType;
</script>

<Hst.Story
  title="Spinner"
  layout={{ type: "grid", width: "50%" }}
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Spinner />
  </Hst.Variant>

  <Hst.Variant
    title="With label"
    source={withLabel}
  >
    <Spinner label="Loading..." />
  </Hst.Variant>
</Hst.Story>
