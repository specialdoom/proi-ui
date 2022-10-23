import type { AlertVariant } from "../alert.types.js";

const template = `<script>
  import {Alert} from "@specialdoom/proi-ui";
</script>
`;

export let defaultSource = `${template}

<Alert 
  title="Some title" 
  variant="success" 
  closable
/>
`;

export let withDescriptionSource = `${template}

<Alert 
  title="Some title" 
>
  Description
</Alert>
`;

export let variantAlertSource = (variant: AlertVariant) =>
  `${template}

<Alert 
  title="Some title"
  variant="${variant}"
>
  Description
</Alert>
`;

export let closableAlertSouce = `${template}

<Alert 
  title="Some title"
  closable
>
  Description
</Alert>
`;