<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import type { ToastVariant } from "../toast.types.js";
  import ToastProvider from "../ToastProvider.svelte";
  import toaster from "../toaster.js";
  import Button from "../../button/Button.svelte";
  import ThemeStory from "../../../__stories__/ThemeStory.svelte";

  export let Hst: HstType;

  let variant: ToastVariant = "success";
  let title: string;
  let description: string;

  function notify(
    variant: ToastVariant = "success",
    title: string = "Default title",
    description: string
  ) {
    toaster.send({
      variant,
      title,
      description
    });
  }
</script>

<ThemeStory
  {Hst}
  title="Toasts"
>
  <ToastProvider />

  Use controls to toast a notification

  <Button on:click={() => notify(variant, title, description)}>
    Toast a notification
  </Button>

  <svelte:fragment slot="controls">
    <Hst.Text
      bind:value={title}
      title="Title"
    />
    <Hst.Text
      bind:value={description}
      title="Description"
    />
    <Hst.Select
      bind:value={variant}
      title="Variant"
      options={[
        { label: "Success", value: "success" },
        { label: "Info", value: "info" },
        { label: "Error", value: "error" },
        { label: "Warning", value: "warning" }
      ]}
    />
  </svelte:fragment>
</ThemeStory>
