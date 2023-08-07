import type { DataDisplayVariant } from "../../utils/types.js";

const template = `<script>
  import Button from "@specialdoom/proi-ui/Button.svelte";
  import Dot from "@specialdoom/proi-ui/Dot.svelte";
</script>
`;

export const defaultSource = `${template}
<Dot>
  <Button>Test</Button>
</Dot>
`;

export const withLabel = `${template}
<Dot label="12">
  <Button>Test</Button>
</Dot>
`;

export function variantDot(variant: DataDisplayVariant) {
  return `${template}
<Dot variant="${variant}">
  <Button>Test</Button>
</Dot>
`;
}
