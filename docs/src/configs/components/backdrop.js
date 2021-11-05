import { columns } from '../shared/columns';

export const data = [
  {
    property: 'visible',
    description: 'Whether the backdrop is visible or not',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'className',
    description: 'Class name for the backdrop container. <br /> Backdrop component uses <code>.sd-backdrop</code> class',
    type: '<code>string</code>',
    default: '<code>null</code>'
  },
  {
    property: '----------',
    description: '----------',
    type: '----------',
    default: '----------'
  },
  {
    property: 'on:click',
    description: 'Handler of the backdrop click event',
    type: '<code>(event) => void</code>',
    default: '<code>-</code>'
  }
];

export const usage = `<script>
import { Backdrop, Button, Tag } from 'proi-ui';
let backdrop = false;

function toggleBackdrop() {
  backdrop = !backdrop;
}
</script>

<Button on:click={toggleBackdrop}>Show backdrop</Button>
<Backdrop visible={backdrop} on:click={toggleBackdrop}>
  <Tag>Custom optional content</Tag>
</Backdrop>
</style>
`;

export const config = { title: 'Backdrop component', columns, data, usage };
