<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Alert from "../Alert.svelte";
  import type { AlertVariant } from "../alert.types.js";
  import * as source from "./alert.source.js";

  const { defaultSource, withDescriptionSource, variantAlertSource, closableAlertSouce } =
    source;

  export let Hst: HstType;

  let title: string = "Alert title";
  let variant: AlertVariant = "success";
  let description: string = "Description";
</script>

<Hst.Story title="Alert">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Alert {title} />
  </Hst.Variant>

  <Hst.Variant
    title="With description"
    source={withDescriptionSource}
  >
    <Alert {title}>{description}</Alert>
  </Hst.Variant>

  <Hst.Variant
    title="Success alert"
    source={variantAlertSource("success")}
  >
    <Alert
      {title}
      variant="success"
    />
  </Hst.Variant>

  <Hst.Variant
    title="Warning alert"
    source={variantAlertSource("warning")}
  >
    <Alert
      {title}
      variant="warning"
    />
  </Hst.Variant>

  <Hst.Variant
    title="Error alert"
    source={variantAlertSource("error")}
  >
    <Alert
      {title}
      variant="error"
    />
  </Hst.Variant>

  <Hst.Variant
    title="Info alert"
    source={variantAlertSource("info")}
  >
    <Alert
      {title}
      variant="info"
    />
  </Hst.Variant>

  <Hst.Variant
    title="Closable"
    source={closableAlertSouce}
  >
    <Alert
      {title}
      {variant}
      closable={true}
    />
  </Hst.Variant>
</Hst.Story>
