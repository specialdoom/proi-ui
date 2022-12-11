import type { DataDisplayVariant } from "../../utils/types";

const template = `<script>
  import {Dot, Button} from "@specialdoom/proi-ui";
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
