<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Divider from "../Divider.svelte";
  import Button from "../../button/Button.svelte";
  import Pill from "../../tags/pill/Pill.svelte";
  import {
    defaultSource,
    usageWithButtonComponentSource,
    usageWithTagComponentSource
  } from "./divider.source.js";
  import ThemeStory from "../../../__stories__/ThemeStory.svelte";

  export let Hst: HstType;
</script>

<ThemeStory
  {Hst}
  title="Divider"
  layout={{ type: "grid", width: "100%" }}
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Divider />
  </Hst.Variant>

  <Hst.Variant
    title="Used with: Button"
    source={usageWithButtonComponentSource}
  >
    <div
      style:display="flex"
      style:justify-content="space-around"
    >
      <Button variant="outline">First</Button>
      <Divider />
      <Button variant="outline">Second</Button>
      <Divider />
      <Button variant="outline">Third</Button>
    </div>
  </Hst.Variant>

  <Hst.Variant
    title="Used with: Tag"
    source={usageWithTagComponentSource}
  >
    <div
      style:display="flex"
      style:justify-content="space-around"
    >
      <Pill label="First tag" />
      <Divider />
      <Pill label="Second tag" />
      <Divider />
      <Pill label="Third tag" />
    </div>
  </Hst.Variant>
</ThemeStory>
