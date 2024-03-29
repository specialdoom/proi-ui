import type { AlertVariant } from "../alert.types.js";

const template = `<script>
  import Alert from "@specialdoom/proi-ui/Alert.svelte";
</script>
`;

export const defaultSource = `${template}

<Alert 
  title="Some title" 
  variant="success" 
  closable
/>
`;

export const withDescriptionSource = `${template}

<Alert 
  title="Some title" 
>
  Description
</Alert>
`;

export const variantAlertSource = (variant: AlertVariant) =>
  `${template}

<Alert 
  title="Some title"
  variant="${variant}"
>
  Description
</Alert>
`;

export const closableAlertSouce = `${template}

<Alert 
  title="Some title"
  closable
>
  Description
</Alert>
`;

export const onCloseEventTemplate = `${template}

<Alert 
  title="Some title"
  closable
  on:close={() => console.log("close event")}
>
  Description
</Alert>
`;
