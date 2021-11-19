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
  },
  {
    property: 'className',
    description: 'Class name of progress container. <br /> Progress component uses <code>.sd-progress</code> class',
    type: '<code>string</code>',
    default: '<code>null</code>'
  },
  {
    property: 'lineClassName',
    description: 'Class name of progress line container. <br /> Progress line component uses <code>.sd-progress-line</code> class',
    type: '<code>string</code>',
    default: '<code>null</code>'
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
