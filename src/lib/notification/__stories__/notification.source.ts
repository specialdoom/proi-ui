import type { FeedbackVariant } from "../../utils/types.js";

const template = `<script>
  import Notification from "@specialdoom/proi-ui/Notification.svelte";
</script>
`;

export const defaultSource = `${template}
<Notification title="Default" />
`;

export const withDescriptionSource = `${template}
<Notification title="With description" description="Description" />
`;

export function getVariantSource(variant: FeedbackVariant) {
  return `${template}
<Notification
  variant="${variant}"
  title="${variant}"
/>
`;
}
