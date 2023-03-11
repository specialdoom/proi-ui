const template = `<script>
  import Spinner from "@specialdoom/proi-ui/Spinner.svelte";
</script>`;

export const defaultSource = `${template}
<Spinner />
`;

export const withLabel = `${template}
<Spinner label="Loading..." />
`;
