<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import type { SliceVariant } from "./toast.types.js";
  import ToastProvider from "./ToastProvider.svelte";
  import * as toaster from "./toaster.js";
  import Button from "../button/Button.svelte";

  export let Hst: Hst;

  const variants = [
    {
      value: "error",
      label: "Error toast",
    },
    {
      value: "success",
      label: "Success toast",
    },
    {
      value: "info",
      label: "Info toast",
    },
    {
      value: "warning",
      label: "Warning toast",
    },
  ];
  let variant: SliceVariant = "success";
  let title: string;
  let message: string;

  function notify(
    variant = "success",
    title = "Default title",
    message: string
  ) {
    toaster.send({
      variant,
      title,
      message,
    });
  }
</script>

<Hst.Story title="Toasts">
  <ToastProvider />

  Use controls to toast a notification

  <Button on:click={() => notify(variant, title, message)}>
    Toast a notification
  </Button>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={title} title="Title" />
    <Hst.Text bind:value={message} title="Message" />
    <Hst.Select
      bind:value={variant}
      title="Variant"
      options={[
        { label: "Success", value: "success" },
        { label: "Info", value: "info" },
        { label: "Error", value: "error" },
        { label: "Warning", value: "warning" },
      ]}
    />
  </svelte:fragment>
</Hst.Story>
