<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import Alert from "./Alert.svelte";
  import type { AlertVariant } from "./alert.types.js";
  export let Hst: Hst;

  let title: string = "Alert title";
  let variant: AlertVariant = "success";
  let closable: boolean = true;
  let description: string = "Description";
</script>

<Hst.Story title="Alert">
  <Hst.Variant title="Default">
    <Alert {title} />
  </Hst.Variant>

  <Hst.Variant title="With description">
    <Alert {title}>{description}</Alert>
  </Hst.Variant>

  <Hst.Variant title="Success alert">
    <Alert {title} variant="success" />
  </Hst.Variant>

  <Hst.Variant title="Warning alert">
    <Alert {title} variant="warning" />
  </Hst.Variant>

  <Hst.Variant title="Error alert">
    <Alert {title} variant="error" />
  </Hst.Variant>

  <Hst.Variant title="Info alert">
    <Alert {title} variant="info" />
  </Hst.Variant>

  <Hst.Variant title="Closable">
    <Alert {title} {variant} closable={true} />
  </Hst.Variant>

  <!-- Not working... Will be added later -->
  <!-- <Hst.Variant title="Playground">
    <Alert {title} {variant} {closable}>{description}</Alert>

    <svelte:fragment slot="controls">
      <Hst.Text bind:value={title} title="Title" />
      <Hst.Text bind:value={description} title="Description" />
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
      <Hst.Checkbox bind:value={closable} title="Closable" />
    </svelte:fragment>
  </Hst.Variant> -->
</Hst.Story>
