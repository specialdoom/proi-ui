<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Backdrop from "../Backdrop.svelte";
  import { logEvent } from "histoire/client";
  import { defaultSource, onClickSource, withCustomContent } from "./backdrop.source.js";
  import Badge from "../../tags/Badge.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="Backdrop">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <div
      style:height="100vh"
      style:width="100%"
    >
      <Backdrop visible>Backdrop content</Backdrop>
    </div>
  </Hst.Variant>

  <Hst.Variant
    title="With custom content"
    source={withCustomContent}
  >
    <div
      style:height="100vh"
      style:width="100%"
    >
      <Backdrop visible>
        <Badge>Custom content</Badge>
      </Backdrop>
    </div>
  </Hst.Variant>

  <Hst.Variant
    title="on:click"
    source={onClickSource}
  >
    <div
      style:height="100vh"
      style:width="100%"
    >
      <Backdrop
        visible
        on:click={(event) => logEvent("Click", event)}>Backdrop content</Backdrop
      >
    </div>
  </Hst.Variant>
</Hst.Story>
