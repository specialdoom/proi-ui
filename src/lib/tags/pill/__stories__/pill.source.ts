import type { DataDisplayVariant } from "../../../utils/types.js";

const template = `<script>
  import Pill from "@specialdoom/proi-ui/Pill.svelte";
</script>
`;

export const defaultSource = `${template}
<Pill />
`;

export const withLabel = `${template}
<Pill label="Content" />
`;

export function variantPill(variant: DataDisplayVariant) {
  return `${template}
<Pill
  variant="${variant}"
  label="${variant}"
/>
`;
}
