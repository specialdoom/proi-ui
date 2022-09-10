import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'checked',
    description: `Whether the switch it's checked`,
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'disabled',
    description: `Whether the switch it's disabled`,
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  }
];

export const usage = `<script>
import { Switch } from '@specialdoom/proi-ui'

let checked = false;
</script>

<Switch bind:checked>{checked ? 'Checked' : 'Unchecked'}</Switch>
<Switch checked={true} disabled>Checked disabled</Switch>
<Switch checked={false} disabled>Unchecked disabled</Switch>
`;

export const config = { title: 'Switch component', usage, data, columns };
