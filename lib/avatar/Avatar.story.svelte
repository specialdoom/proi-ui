<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import Avatar from "./Avatar.svelte";
  import Lauren from "./defaults/Lauren.svelte";
  import Tim from "./defaults/Tim.svelte";
  import Nikita from "./defaults/Nikita.svelte";
  import Leo from "./defaults/Leo.svelte";

  export let Hst: Hst;
</script>

<Hst.Story title="Avatar">
  <Hst.Variant title="With initials">
    <Avatar initials="PU" />
  </Hst.Variant>

  <Hst.Variant title="With image">
    <Avatar image="https://avatars.githubusercontent.com/u/41910815?v=4" />
  </Hst.Variant>

  <Hst.Variant title="Default">
    <Lauren />
    <Tim />
    <Leo />
    <Nikita />
  </Hst.Variant>
</Hst.Story>
