import { columns } from '../shared/columns';

export const data = [
  {
    property: 'checked',
    description: `Whether the checkbox it's checked`,
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'disabled',
    description: `Whether the checkbox it's disabled`,
    type: 'boolean',
    default: 'false'
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
