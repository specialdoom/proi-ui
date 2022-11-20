<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Spinner from "./Spinner.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="Spinner">
  <Hst.Variant title="Default">
    <Spinner />
  </Hst.Variant>

  <Hst.Variant title="With label">
    <Spinner label="Loading..." />
  </Hst.Variant>
</Hst.Story>
