import type { TableData } from '../config.types.js';
import { columns } from '../shared/columns.js';

export const tableData: TableData[] = [
  {
    property: 'selected',
    description: 'Current selected value',
    type: '<code>option</code>',
    default: '<code>-</code>'
  },
  {
    property: 'options',
    description: 'Options of dropdown',
    type: '<code>array</code>',
    default: '<code>[]</code>'
  },
  {
    property: 'title',
    description: 'Title of dropdown',
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
    property: 'className',
    description: 'Class name for dropdown container. <br /> Dropdown component uses <code>.sd-dropdown</code> class',
    type: '<code>string</code>',
    default: '<code>null</code>'
  },
  {
    property: 'listClassName',
    description: 'Class name for options list container. <br /> Dropdown list component uses <code>.sd-dropdown-options</code> class',
    type: '<code>string</code>',
    default: '<code>null</code>'
  }
];

export const usage: string = `<script>
import {Dropdown} from 'proi-ui';

let options = ["First option", "Second option", "Third option"];

let option = '';
let defaultSelectedOption = 'First option';
</script>

<Dropdown bind:selected={option} {options} title="No option selected" />
<Dropdown
  bind:selected={defaultSelectedOption}
  {options}
  title="No option selected"
/>
<Dropdown title="Disabled" disabled />
`;

export const config = { title: 'Dropdown component', usage, tableData, columns };
