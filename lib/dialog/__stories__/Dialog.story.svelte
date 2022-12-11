<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { logEvent } from "histoire/client";
  import Button from "../../button/Button.svelte";
  import Dialog from "../Dialog.svelte";
  import {
    defaultSource,
    onCancelEvent,
    onOkEvent,
    withControlComponent,
    withoutActions,
    withTitle
  } from "./dialog.source.js";

  export let Hst: HstType;

  export let showDialog: boolean = false;
</script>

<Hst.Story title="Dialog">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Dialog visible={true}>
      <div>Some dialog content</div>
    </Dialog>
  </Hst.Variant>

  <Hst.Variant
    title="With title"
    source={withTitle}
  >
    <Dialog
      visible={true}
      title="Custom title"
    >
      <div>Some dialog content</div>
    </Dialog>
  </Hst.Variant>

  <Hst.Variant
    title="Without actions"
    source={withoutActions}
  >
    <Dialog
      visible={true}
      title="Custom title"
      showActions={false}
    >
      <div>Some dialog content</div>
    </Dialog>
  </Hst.Variant>

  <Hst.Variant
    title="With control component"
    source={withControlComponent}
  >
    <Button on:click={() => (showDialog = true)}>Show dialog</Button>
    <Dialog
      bind:visible={showDialog}
      title="Custom title"
    >
      <div>Some dialog content</div>
    </Dialog>
  </Hst.Variant>

  <Hst.Variant
    title="on:ok event"
    source={onOkEvent}
  >
    <Button on:click={() => (showDialog = true)}>Show dialog</Button>
    <Dialog
      bind:visible={showDialog}
      on:ok={(event) => logEvent("ok action triggered", event)}
      title="Custom title"
    >
      <div>Some dialog content</div>
    </Dialog>
  </Hst.Variant>

  <Hst.Variant
    title="on:cancel event"
    source={onCancelEvent}
  >
    <Button on:click={() => (showDialog = true)}>Show dialog</Button>
    <Dialog
      bind:visible={showDialog}
      on:cancel={(event) => logEvent("cancel action triggered", event)}
      title="Custom title"
    >
      <div>Some dialog content</div>
    </Dialog>
  </Hst.Variant>
</Hst.Story>
