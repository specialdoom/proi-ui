const template = `<script>
  import Dialog from "@specialdoom/proi-ui/Dialog.svelte";
  import Button from "@specialdoom/proi-ui/Button.svelte";

  let showDialog = true;
</script>
`;

export const defaultSource = `${template}
<Dialog visible={true}>
  <div>Some dialog content</div>
</Dialog>
`;

export const withTitle = `${template}
<Dialog 
  title="Custom title" 
  visible={true}
>
  <div>Some dialog content</div>
</Dialog>
`;

export const withoutActions = `${template}
<Dialog 
  title="Custom title" 
  visible={true}
  showActions={false}
>
  <div>Some dialog content</div>
</Dialog>
`;

export const onOkEvent = `${template}
<Button on:click={() => (showDialog = true)}>Show dialog</Button>
<Dialog
  bind:visible={showDialog}
  on:ok={() => console.log("ok action triggered")}
  title="Custom title"
>
  <div>Some dialog content</div>
</Dialog>
`;

export const onCancelEvent = `${template}
<Button on:click={() => (showDialog = true)}>Show dialog</Button>
<Dialog
  bind:visible={showDialog}
  on:cancel={() => console.log("cancel action triggered")}
  title="Custom title"
>
  <div>Some dialog content</div>
</Dialog>
`;
