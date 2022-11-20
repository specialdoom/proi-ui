<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Pill from "./Pill.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="Tags/Pill">
  <Hst.Variant title="Default">
    <Pill />
  </Hst.Variant>

  <Hst.Variant title="With content">
    <Pill>Content</Pill>
  </Hst.Variant>

  <Hst.Variant title="Pine Pill">
    <Pill variant="pine">Pine</Pill>
  </Hst.Variant>

  <Hst.Variant title="Flame Pill">
    <Pill variant="flame">Flame</Pill>
  </Hst.Variant>

  <Hst.Variant title="Neutral Pill">
    <Pill variant="neutral">Neutral</Pill>
  </Hst.Variant>

  <Hst.Variant title="Mikado Pill">
    <Pill variant="mikado">Mikado</Pill>
  </Hst.Variant>

  <Hst.Variant title="Tufts Pill">
    <Pill variant="tufts">Tufts</Pill>
  </Hst.Variant>

  <Hst.Variant title="Vivid Pill">
    <Pill variant="vivid">Vivid</Pill>
  </Hst.Variant>
</Hst.Story>
