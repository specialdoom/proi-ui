import type { DataDisplayVariant } from "../../../utils/types.js";

const template = `<script>
  import {Badge} from "@specialdoom/proi-ui";
</script>
`;

export const defaultSource = `${template}
<Badge />
`;

export const withLabel = `${template}
<Badge label="Content" />
`;

export function variantBadge(variant: DataDisplayVariant) {
  return `${template}
<Badge
  variant="${variant}"
  label="${variant}"
/>
`;
}
