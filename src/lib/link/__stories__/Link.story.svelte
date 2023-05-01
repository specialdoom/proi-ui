<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Link from "../Link.svelte";

  export let Hst: HstType;
</script>

<Hst.Story
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
</Hst.Story>
