import { columns } from '../shared/columns';

export const data = [
  {
    property: 'visible',
    description: 'Whether the backdrop is visible',
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'on:click',
    description: 'Handler of the backdrop click event',
    type: '(event) => void',
    default: '-'
  }
];

export const usage = `<script>
import { Backdrop } from 'proi-ui';
</script>

<Backdrop
  visible={true}
  on:click={toggleFunction}
>
  <Chip />
</Backdrop>
`;

export const config = { title: 'Backdrop component', columns, data, usage };
