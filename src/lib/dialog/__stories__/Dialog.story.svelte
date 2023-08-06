<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { logEvent } from "histoire/client";
  import Button from "../../button/Button.svelte";
  import Dialog from "../Dialog.svelte";
  import {
    defaultSource,
    onCancelEvent,
    onOkEvent,
    withoutActions,
    withTitle
  } from "./dialog.source.js";
  import ThemeStory from "../../../__stories__/ThemeStory.svelte";

  export let Hst: HstType;

  let visible: boolean = true;
  let title: string = "Title";
  let content: string = "Content";
  let showActions: boolean = false;
</script>

<ThemeStory
  {Hst}
  title="Dialog"
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Dialog visible={true}>
      <div>Some dialog content</div>
    </Dialog>
  </Hst.Variant>

  <Hst.Variant title="Playground">
    <Dialog
      bind:visible
      {title}
      {showActions}
    >
      {content}
    </Dialog>
    <svelte:fragment slot="controls">
      <Hst.Checkbox
        bind:value={visible}
        title="Visible"
      />
      <Hst.Text
        bind:value={title}
        title="Title"
      />
      <Hst.Text
        bind:value={content}
        title="Content"
      />
      <Hst.Checkbox
        bind:value={showActions}
        title="Show actions"
      />
    </svelte:fragment>
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
    title="on:ok event"
    source={onOkEvent}
  >
    <Button on:click={() => (visible = true)}>Show dialog</Button>
    <Dialog
      bind:visible
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
    <Button on:click={() => (visible = true)}>Show dialog</Button>
    <Dialog
      bind:visible
      on:cancel={(event) => logEvent("cancel action triggered", event)}
      title="Custom title"
    >
      <div>Some dialog content</div>
    </Dialog>
  </Hst.Variant>
</ThemeStory>
