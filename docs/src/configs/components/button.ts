import type { TableData } from '../config.types.js';
import { columns } from '../shared/columns.js';

export const tableData: TableData[] = [
  {
    property: 'variant',
    description: `Variant of button. <br /> Options: <code>primary</code>, <code>secondary</code>, <code>link</code>`,
    type: '<code>string</code>',
    default: `<code>'primary'</code>`
  },
  {
    property: 'outlined',
    description: 'Whether the button is outlined',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'disabled',
    description: 'Whether the button is disabled',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'small',
    description: 'Whether the button is small',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'className',
    description: 'Class name for button. <br /> Button component uses <code>.sd-button</code>',
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
    description: 'Handler of the click event',
    type: '<code>(event) => void</code>',
    default: '<code>-</code>'
  }
];

export const usage: string = `<script>
 import { Button } from 'proi-ui';
</script>;

<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="link">Link</Button>
<Button outlined>Primary outlined</Button>
<Button small>Primary small</Button>
<Button variant="secondary" outlined small>Secondary small</Button>
<Button disabled>Disabled</Button>
<Button variant="link" disabled>Link disabled</Button>
`;

export const config = { title: 'Button component', columns, tableData, usage };
