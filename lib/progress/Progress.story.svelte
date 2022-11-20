<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Progress from "./Progress.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="Progress">
  <Hst.Variant title="Default">
    <Progress />
  </Hst.Variant>

  <Hst.Variant title="With percent">
    <Progress percent={87} />
  </Hst.Variant>

  <Hst.Variant title="Full (success state)">
    <Progress percent={100} />
  </Hst.Variant>

  <Hst.Variant title="With error">
    <Progress
      percent={50}
      error
    />
  </Hst.Variant>
</Hst.Story>
