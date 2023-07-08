<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Link from "../Link.svelte";
  import ThemeStory from "../../histoire/ThemeStory.svelte";

  export let Hst: HstType;
</script>

<ThemeStory
  {Hst}
  title="Link"
  layout={{ type: "grid", width: "100%" }}
>
  <Hst.Variant title="Default">
    <Link
      href="#"
      title="Go here"
    >
      Go here
    </Link>
  </Hst.Variant>
</ThemeStory>
