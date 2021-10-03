<script>
  import { config } from '../../configs/components/radio';
  import Docs from '../../components/Docs.svelte';
  import { Radio } from 'proi-ui';

  let options = [
    { text: 'First', value: 1 },
    { text: 'Second', value: 2 },
    { text: 'Third', value: 3 }
  ];
  let radio = 4;
</script>

<Docs {config}>
  {#each options as option}
    <Radio value={option.value} bind:group={radio}>{option.text}</Radio>
    <br />
  {/each}
  <Radio value={4} bind:group={radio} disabled>Forth disabled</Radio>
</Docs>
