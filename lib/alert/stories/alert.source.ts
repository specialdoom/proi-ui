import type { AlertVariant } from "../alert.types.js";

const template = `<script>
  import {Alert} from "@specialdoom/proi-ui";
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
