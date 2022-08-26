<script lang="ts">
  import { config } from '../../configs/components/radio';
  import Docs from '../../components/Docs.svelte';
  import { Radio } from '../../../../src';
  import type { RadioOption } from './components.types';

  let options: RadioOption[] = [
    { text: 'First', value: 1 },
    { text: 'Second', value: 2 },
    { text: 'Third', value: 3 }
  ];
  let radio: number = 4;
</script>

<Docs {config}>
  {#each options as option}
    <Radio value={option.value} bind:group={radio}>{option.text}</Radio>
    <br />
  {/each}
  <Radio value={4} bind:group={radio} disabled>Forth disabled</Radio>
</Docs>
