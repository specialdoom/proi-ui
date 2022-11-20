const template = `<script>
  import {Backdrop} from "@specialdoom/proi-ui";
</script>
`;

export const defaultSource = `${template}

<Backdrop visible>Backdrop content</Backdrop>
`;

export const onClickSource = `${template}

<Backdrop visible on:click={() => console.log("click")}>Backdrop content</Backdrop>
`;
