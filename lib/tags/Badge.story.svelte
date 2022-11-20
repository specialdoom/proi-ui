<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Badge from "./Badge.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="Tags/Badge">
  <Hst.Variant title="Default">
    <Badge />
  </Hst.Variant>

  <Hst.Variant title="With content">
    <Badge>Content</Badge>
  </Hst.Variant>

  <Hst.Variant title="Pine Badge">
    <Badge variant="pine">Pine</Badge>
  </Hst.Variant>

  <Hst.Variant title="Flame Badge">
    <Badge variant="flame">Flame</Badge>
  </Hst.Variant>

  <Hst.Variant title="Neutral Badge">
    <Badge variant="neutral">Neutral</Badge>
  </Hst.Variant>

  <Hst.Variant title="Mikado Badge">
    <Badge variant="mikado">Mikado</Badge>
  </Hst.Variant>

  <Hst.Variant title="Tufts Badge">
    <Badge variant="tufts">Tufts</Badge>
  </Hst.Variant>

  <Hst.Variant title="Vivid Badge">
    <Badge variant="vivid">Vivid</Badge>
  </Hst.Variant>
</Hst.Story>
