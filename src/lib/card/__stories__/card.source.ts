const template = `<script>
  import Card from "@specialdoom/proi-ui/Card.svelte";
</script>
`;

export const defaultSource = `${template}
<Card
  title="Title"
  description="Supporting description for the card goes here like a breeze."
/>`;

export const withLongerTitle = `${template}
<Card
  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  description="Supporting description for the card goes here like a breeze."
/>`;

export const withImage = `${template}
<Card
  title="Title"
  description="Supporting description for the card goes here like a breeze."
  imageSrc="https://www.wallart.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/m/a/marble_1.jpg"
/>`;

export const withAction = `${template}
<Card
  title="Title"
  description="Supporting description for the card goes here like a breeze."
  showAction
/>`;

export const withCustomActionLabel = `${template}
<Card
  title="Title"
  description="Supporting description for the card goes here like a breeze."
  showAction
  actionLabel="Custom action"
/>`;

export const withCancelAction = `${template}
<Card
  title="Title"
  description="Supporting description for the card goes here like a breeze."
  showAction
  showCancelAction
/>`;

export const onActionEvent = `${template}
<Card
  title="Title"
  description="Supporting description for the card goes here like a breeze."
  showAction
  on:action={() => console.log("action")}
/>`;

export const onCancelEvent = `${template}
<Card
  title="Title"
  description="Supporting description for the card goes here like a breeze."
  showAction
  showCancelAction
  on:cancel={() => console.log("cancel")}
/>`;
