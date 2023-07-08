<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Backdrop from "../Backdrop.svelte";
  import { logEvent } from "histoire/client";
  import { defaultSource, onClickSource, withCustomContent } from "./backdrop.source.js";
  import Badge from "../../tags/badge/Badge.svelte";
  import ThemeStory from "../../histoire/ThemeStory.svelte";

  export let Hst: HstType;

  let visible: boolean = false;
</script>

<ThemeStory
  {Hst}
  title="Backdrop"
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Backdrop visible>Backdrop content</Backdrop>
  </Hst.Variant>

  <Hst.Variant title="Playground">
    <Backdrop {visible} />
    <svelte:fragment slot="controls">
      <Hst.Checkbox
        bind:value={visible}
        title="Visible"
      />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant
    title="With custom content"
    source={withCustomContent}
  >
    <Backdrop visible>
      <Badge>Custom content</Badge>
    </Backdrop>
  </Hst.Variant>

  <Hst.Variant
    title="on:click"
    source={onClickSource}
  >
    <Backdrop
      visible
      on:click={(event) => logEvent("Click", event)}>Backdrop content</Backdrop
    >
  </Hst.Variant>
</ThemeStory>
