<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import Alert from "../Alert.svelte";
  import type { AlertVariant } from "../alert.types.js";
  import * as source from "./alert.source.js";

  const {defaultSource, withDescriptionSource, variantAlertSource, closableAlertSouce} = source;

  export let Hst: Hst;

  let title: string = "Alert title";
  let variant: AlertVariant = "success";
  let closable: boolean = true;
  let description: string = "Description";
</script>

<Hst.Story title="Alert">
  <Hst.Variant title="Default" source={defaultSource}>
    <Alert {title} />
  </Hst.Variant>

  <Hst.Variant title="With description" source={withDescriptionSource}>
    <Alert {title}>{description}</Alert>
  </Hst.Variant>

  <Hst.Variant title="Success alert" source={variantAlertSource("success")}>
    <Alert {title} variant="success" />
  </Hst.Variant>

  <Hst.Variant title="Warning alert" source={variantAlertSource("warning")}>
    <Alert {title} variant="warning" />
  </Hst.Variant>

  <Hst.Variant title="Error alert" source={variantAlertSource("error")}>
    <Alert {title} variant="error" />
  </Hst.Variant>

  <Hst.Variant title="Info alert" source={variantAlertSource("alert")}>
    <Alert {title} variant="info" />
  </Hst.Variant>

  <Hst.Variant title="Closable" source={closableAlertSouce}>
    <Alert {title} {variant} closable={true} />
  </Hst.Variant>

  <!-- <svelte:fragment slot="controls">
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
  </svelte:fragment> -->
</Hst.Story>
