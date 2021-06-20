<script>
  import Highlight from './Highlight.svelte';
  import Container from './display/Container.svelte';
  import SubTitle from './display/SubTitle.svelte';
  import Title from './display/Title.svelte';
  import Table from './Table.svelte';

  export let config = {};
</script>

<Container>
  <Title>{config.title}</Title>
  <SubTitle>Usage</SubTitle>
  <Highlight>{config.usage}</Highlight>
  <SubTitle>Output</SubTitle>
  <slot />
  <SubTitle>API</SubTitle>
  <Table columns={config.columns} data={config.data} />
</Container>
