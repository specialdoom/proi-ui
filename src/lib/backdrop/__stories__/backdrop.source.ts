const template = `<script>
  import Backdrop from "@specialdoom/proi-ui/Backdrop.svelte";
  import Badge from "@specialdoom/proi-ui/Badge.svelte";
</script>
`;

export const defaultSource = `${template}
<Backdrop visible>Backdrop content</Backdrop>
`;

export const withCustomContent = `${template}
<Backdrop visible>
  <Badge>
    Backdrop content
  <Badge />
</Backdrop>
`;

export const onClickSource = `${template}
<Backdrop visible on:click={() => console.log("click")}>Backdrop content</Backdrop>
`;
