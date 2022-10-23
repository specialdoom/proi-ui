<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import Button from "../button/Button.svelte";
  import Dialog from "./Dialog.svelte";

  export let Hst: Hst;

  export let showDialog: boolean = false;
</script>

<Hst.Story title="Dialog">
  <Hst.Variant title="Default">
    <Dialog visible={true}>
      <p>Some dialog content</p>
    </Dialog>
  </Hst.Variant>

  <Hst.Variant title="With title">
    <Dialog visible={true} title="Custom title">
      <p>Some dialog content</p>
    </Dialog>
  </Hst.Variant>

  <Hst.Variant title="Without actions">
    <Dialog visible={true} title="Custom title" showActions={false}>
      <p>Some dialog content</p>
    </Dialog>
  </Hst.Variant>

  <Hst.Variant title="With control component">
    <Button on:click={() => (showDialog = true)}>Show dialog</Button>
    <Dialog bind:visible={showDialog} title="Custom title">
      <p>Some dialog content</p>
    </Dialog>
  </Hst.Variant>
</Hst.Story>
