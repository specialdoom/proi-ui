import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'value',
    description: 'Value of dropdown',
    type: '<code>string</code>',
    default: '<code>\'\'</code>'
  },
  {
    property: 'options',
    description: 'Options of dropdown',
    type: '<code>DropdownOption[]</code>',
    default: '<code>[]</code>'
  },
  {
    property: 'placeholder',
    description: 'Placeholder of dropdown',
    type: '<code>string</code>',
    default: `<code>''</code>`
  },
  {
    property: 'disabled',
    description: 'Whether the dropdown is disabled',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'error',
    description: 'Whether the dropdown is in error state',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  }
];

export const usage = `<script>
import { Dropdown } from '@specialdoom/proi-ui';

let options = [
  { label: "Label 1", value: "1" },
  { label: "Label 2", value: "2" },
];

let value;
</script>

<Dropdown
  bind:value
  {options}
  placeholder="Placeholder"
/>
`;

export const config = { title: 'Dropdown component', usage, data, columns };
