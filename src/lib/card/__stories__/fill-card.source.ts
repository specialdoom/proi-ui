import type { DataDisplayVariant } from "../../utils/types.js";

const template = `<script>
  import FillCard from "@specialdoom/proi-ui/FillCard.svelte";
</script>
`;

export const defaultSource = `${template}
<FillCard
  title="Title"
  description="Supporting description for the card goes here like a breeze."
/>
`;

export const withLongerTitle = `${template}
<FillCard
  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
  description="Supporting description for the card goes here like a breeze."
/>
`;

export function variantFillCard(variant: DataDisplayVariant) {
  return `${template}
<FillCard
  variant="${variant}"
  title="Title"
  description="Supporting description for the card goes here like a breeze."
/>
`;
}
