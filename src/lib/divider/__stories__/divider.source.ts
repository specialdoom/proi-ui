import type { DataDisplayVariant } from "../../utils/types";

const template = `<script>
  import Divider from "@specialdoom/proi-ui/Divider.svelte";
  import Button from "@specialdoom/proi-ui/Button.svelte";
  import Pill from "@specialdoom/proi-ui/Pill.svelte";
</script>
`;

export const defaultSource = `${template}
<Divider />
`;

export const usageWithButtonComponentSource = `${template}
<Button variant="outline">First</Button>
<Divider />
<Button variant="outline">Second</Button>
<Divider />
<Button variant="outline">Third</Button>
`;

export const usageWithTagComponentSource = `${template}
<Pill label="First tag" />
<Divider />
<Pill label="Second tag" />
<Divider />
<Pill label="Third tag" />
`;

export function variantDot(variant: DataDisplayVariant) {
  return `${template}
<Dot variant="${variant}">
  <Button>Test</Button>
</Dot>
`;
}
