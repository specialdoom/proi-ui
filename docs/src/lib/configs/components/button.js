import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'type',
    description: `Type of button. <br /> Options: <code>primary</code>, <code>secondary</code>, <code>ghost</code>`,
    type: '<code>string</code>',
    default: `<code>'primary'</code>`
  },
  {
    property: 'disabled',
    description: 'Whether the button is disabled',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'className',
    description: 'Class name for button. <br /> Button component uses <code>.proi-button</code>',
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

export const usage = `<script>
 import { Button } from '@specialdoom/proi-ui';
</script>;

<Button>Primary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="secondary">Secondary</Button>
<Button disabled>Primary</Button>
<Button variant="ghost" disabled>Ghost</Button>
<Button variant="secondary" disabled>Secondary</Button>
`;

export const config = { title: 'Button component', columns, data, usage };
