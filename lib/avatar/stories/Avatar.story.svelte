<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import Avatar from "../index.js";

  import * as source from "./avatar.source.js";

  const {withInitialsSource, withImageSource, defaultAvatarsSource} = source;

  export let Hst: Hst;
</script>

<Hst.Story title="Avatar">
  <Hst.Variant title="With initials" source={withInitialsSource}>
    <Avatar initials="PU" />
  </Hst.Variant>

  <Hst.Variant title="With image" source={withImageSource}>
    <Avatar image="https://avatars.githubusercontent.com/u/41910815?v=4" />
  </Hst.Variant>

  <Hst.Variant title="Default" source={defaultAvatarsSource}>
    <Avatar.Lauren />
    <Avatar.Tim />
    <Avatar.Leo />
    <Avatar.Nikita />
  </Hst.Variant>
</Hst.Story>
