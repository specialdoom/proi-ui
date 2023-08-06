<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Spinner from "../Spinner.svelte";
  import { defaultSource, largeSizeSource, mediumSizeSource } from "./spinner.source.js";
  import ThemeStory from "../../../__stories__/ThemeStory.svelte";

  export let Hst: HstType;
</script>

<ThemeStory
  {Hst}
  title="Spinner"
  layout={{ type: "grid", width: "50%" }}
>
  <Hst.Variant
    title="Default (Small)"
    source={defaultSource}
  >
    <Spinner />
  </Hst.Variant>

  <Hst.Variant
    title="Medium"
    source={mediumSizeSource}
  >
    <Spinner size="medium" />
  </Hst.Variant>

  <Hst.Variant
    title="Large"
    source={largeSizeSource}
  >
    <Spinner size="large" />
  </Hst.Variant>
</ThemeStory>
