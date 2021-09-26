import { columns } from '../shared/columns';

export const data = [
  {
    property: 'visible',
    description: 'Whether the backdrop is visible or not',
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'className',
    description: 'Class name for the backdrop container',
    type: 'string',
    default: 'null'
  },
  {
    property: 'on:click',
    description: 'Handler of the backdrop click event',
    type: '(event) => void',
    default: '-'
  }
];

export const usage = `<script>
import { Backdrop, Button, Tag } from 'proi-ui';
let backdrop = false;
let customizedBackdrop = false;

function toggleBackdrop() {
  backdrop = !backdrop;
}

function toggleCustomizedBackdrop() {
  customizedBackdrop = !customizedBackdrop;
}
</script>

<Button on:click={toggleBackdrop}>Show backdrop</Button>
<Button on:click={toggleCustomizedBackdrop}>Show customized backdrop</Button>
<Backdrop visible={backdrop} on:click={toggleBackdrop}>
  <Tag>Custom optional content</Tag>
</Backdrop>
<Backdrop
  visible={customizedBackdrop}
  on:click={toggleCustomizedBackdrop}
  className="custom-backdrop"
/>

<style>
  :global(.sd-backdrop.custom-backdrop) {
    background-color: rgba(69, 59, 201, 0.411);
  }
</style>
`;

export const config = { title: 'Backdrop component', columns, data, usage };
