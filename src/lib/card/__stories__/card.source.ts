const template = `<script>
  import Card from "@specialdoom/proi-ui/Card.svelte";
</script>
`;

export const defaultSource = `${template}
<Card
  title="Title"
  description="Supporting description for the card goes here like a breeze."
/>`;

export const withLongerTitleSource = `${template}
<Card
  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  description="Supporting description for the card goes here like a breeze."
/>`;

export const withImageSource = `${template}
<Card
  title="Title"
  description="Supporting description for the card goes here like a breeze."
  imageSrc="https://www.wallart.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/m/a/marble_1.jpg"
/>`;

export const closableSource = `${template}
<Card
  title="Title"
  description="Supporting description for the card goes here like a breeze."
  closable
/>`;

export const withActionsSlotSource = `${template}
<Card
  title="Title"
  description="Supporting description for the card goes here like a breeze."
  closable
>
  <svelte:fragment slot="actions">
    <Button variant="ghost">🧪</Button>
    <Divider />
    <Button variant="ghost">📦</Button>
    <Divider />
    <Button variant="ghost">🧬</Button>
  </svelte:fragment>
</Card>`;

export const onCloseEventSource = `${template}
<Card
  title="Title"
  description="Supporting description for the card goes here like a breeze."
  closable
  on:close={() => console.log("closed")}
/>`;
