import { columns } from '../shared/columns';

export const data = [
  {
    property: 'small',
    description: 'Whether the spinner is small',
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'label',
    description: `Label of the spinner. Can't be used with small spinner`,
    type: 'string',
    default: `''`
  }
];

export const usage = `<script>
import { Spinner } from 'proi-ui';
</script>

<Spinner small />
<Spinner />
<Spinner label="Loading..." />`;

export const config = { title: 'Spinner component', data, usage, columns };
