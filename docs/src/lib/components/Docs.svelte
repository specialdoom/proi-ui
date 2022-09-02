<script>
  import Highlight from './Highlight.svelte';
  import Container from './display/Container.svelte';
  import SubTitle from './display/SubTitle.svelte';
  import Title from './display/Title.svelte';
  import Table from './Table.svelte';

  export let config;
</script>

<Container>
  <Title>{config.title}</Title>
  <SubTitle href="#output">Output</SubTitle>
  <div>
    <slot />
  </div>
  <SubTitle href="#usage">Usage</SubTitle>
  <Highlight code={config.usage} />
  <SubTitle href="#api">API</SubTitle>
  <Table columns={config.columns} data={config.data} />
</Container>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
