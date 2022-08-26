import type { TableData } from '../config.types.js';
import { columns } from '../shared/columns.js';

export const tableData: TableData[] = [
  {
    property: 'value',
    description: 'Value of radio',
    type: '<code>any</code>',
    default: '<code>null</code>'
  },
  {
    property: 'group',
    description: 'Group value',
    type: '<code>any</code>',
    default: '<code>null</code>'
  },
  {
    property: 'disabled',
    description: 'Whether the radio is disabled',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  }
];

export const usage: string = `<script>
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

export const config = { title: 'Radio component', tableData, usage, columns };
