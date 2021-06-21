import { columns } from '../shared/columns';

export const data = [
  {
    property: 'percent',
    description: 'Progress percent',
    type: 'number',
    default: '0'
  },
  {
    property: 'error',
    description: 'Whether there is an error during progress',
    type: 'boolean',
    default: 'false'
  }
];

export const usage = `<script>
import { Progress, Button } from 'proi-ui';

let percent = 67;
let error = false;

function decrement() {
  percent--;
}
function increment() {
  percent++;
}
function toggleError() {
  error = !error;
}
function toggleSuccess() {
  percent = 100;
}
</script>

<Progress {percent} {error} />
<Button small on:click={increment}>Increment</Button>
<Button small on:click={decrement}>Decrement</Button>
<Button small type="secondary" on:click={toggleError} outlined>Error</Button>
<Button small on:click={toggleSuccess}>Success</Button>
`;

export const config = { title: 'Progress component', data, usage, columns };
