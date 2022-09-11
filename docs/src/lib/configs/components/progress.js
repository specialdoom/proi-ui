import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'percent',
    description: 'Progress percent',
    type: '<code>number</code>',
    default: '<code>0</code>'
  },
  {
    property: 'error',
    description: 'Whether there is an error during progress',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  }
];

export const usage = `<script>
  import { Progress } from '@specialdoom/proi-ui';

  let percent = 67;
  let error = true;
</script>

<Progress {percent} />
<Progress {percent} {error} />
`;

export const config = { title: 'Progress component', data, usage, columns };
