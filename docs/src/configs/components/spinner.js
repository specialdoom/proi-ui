import { columns } from '../shared/columns';

export const data = [
  {
    property: 'small',
    description: 'Whether the spinner is small',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'label',
    description: `Label of the spinner. Can't be used with small spinner`,
    type: '<code>string</code>',
    default: `<code>''</code>`
  }
];

export const usage = `<script>
import { Spinner } from 'proi-ui';
</script>

<Spinner small />
<Spinner />
<Spinner label="Loading..." />`;

export const config = { title: 'Spinner component', data, usage, columns };
