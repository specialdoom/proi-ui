const template = `<script>
  import {Backdrop} from "@specialdoom/proi-ui";
</script>
`;

export let defaultSource = `${template}

<Backdrop visible>Backdrop content</Backdrop>
`

export let onClickSource = `${template}

<Backdrop visible on:click={() => console.log("click")}>Backdrop content</Backdrop>
`