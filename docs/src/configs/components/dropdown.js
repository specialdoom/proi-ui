import { columns } from '../shared/columns';

export const data = [
  {
    property: 'selected',
    description: 'Current selected value',
    type: 'option',
    default: '-'
  },
  {
    property: 'options',
    description: 'Options of dropdown',
    type: 'array',
    default: '[]'
  },
  {
    property: 'title',
    description: 'Title of dropdown',
    type: 'string',
    default: `''`
  },
  {
    property: 'disabled',
    description: 'Whether the dropdown is disabled',
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'className',
    description: 'Class name for dropdown container',
    type: 'string',
    default: 'null'
  },
  {
    property: 'listClassName',
    description: 'Class name for options list container',
    type: 'string',
    default: 'null'
  }
];

export const usage = `<script>
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
<Dropdown title="Customized dropdown" {options} className="custom-dropdown" />

<style>
  :global(.sd-dropdown.custom-dropdown) {
    border: 1px solid red;
  }
</style>
`;

export const config = { title: 'Dropdown component', usage, data, columns };
