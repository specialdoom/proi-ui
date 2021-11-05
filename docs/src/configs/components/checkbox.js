import { columns } from '../shared/columns';

export const data = [
  {
    property: 'checked',
    description: `Whether the checkbox it's checked`,
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'disabled',
    description: `Whether the checkbox it's disabled`,
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'className',
    description: 'Class for checkbox container. <br /> Checkbox component uses <code>.sd-checkbox</code> class',
    type: '<code>string</code>',
    default: '<code>null</code>'
  }
];

export const usage = `<script>
import { Checkbox } from 'proi-ui'

let checked = false;
</script>

<Checkbox bind:checked>{checked ? 'Checked' : 'Unchecked'}</Checkbox>
<Checkbox checked={true} disabled>Checked disabled</Checkbox>
<Checkbox checked={false} disabled>Unchecked disabled</Checkbox>
`;

export const config = { title: 'Checkbox component', usage, data, columns };
