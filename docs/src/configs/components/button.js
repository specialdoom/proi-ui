import { columns } from '../shared/columns';

export const data = [
  {
    property: 'type',
    description: `Type of button. Options: 'primary', 'secondary' and 'link'`,
    type: 'string',
    default: `'primary'`
  },
  {
    property: 'outlined',
    description: `Whether the button it's outlined`,
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'disabled',
    description: `Whether the button it's disabled`,
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'small',
    description: `Whether the button it's small`,
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'on:click',
    description: 'Handler of the click event',
    type: '(event) => void',
    default: '-'
  }
];

export const usage = `<script>
 import { Button } from 'proi-ui';
</script>;

<Button>Primary</Button>
<Button type="secondary">Secondary</Button>
<Button type="link">Link</Button>
<Button outlined>Primary outlined</Button>
<Button small>Primary small</Button>
<Button type="secondary" outlined small>Secondary small</Button>
<Button disabled>Disabled</Button>
<Button type="link" disabled>Link disabled</Button>`;

export const config = { title: 'Avatar component', columns, data, usage };
