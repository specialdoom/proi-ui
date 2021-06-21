import { columns } from '../shared/columns';

export const data = [
  {
    property: 'value',
    description: 'Value of radio',
    type: 'any',
    default: 'null'
  },
  {
    property: 'group',
    description: 'Group value',
    type: 'any',
    default: 'null'
  },
  {
    property: 'disabled',
    description: 'Whether the radio is disabled',
    type: 'boolean',
    default: 'false'
  }
];

export const usage = `<script>
import { Radio } from 'proi-ui';

let options = [
  { text: 'First', value: 1 },
  { text: 'Second', value: 2 },
  { text: 'Third', value: 3 }
];
let radio = 1;
</script>

{#each options as option}
  <Radio value={option.value} bind:group={radio}>{option.text}</Radio>
  <br />
{/each}
<Radio value={4} bind:group={radio} disabled>Forth disabled</Radio>`;

export const config = { title: 'Radio component', data, usage, columns };
