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
    description: 'Whether the button is outlined',
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'disabled',
    description: 'Whether the button is disabled',
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'small',
    description: 'Whether the button is small',
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'className',
    description: 'Class name for button',
    type: 'string',
    default: 'null'
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
<Button type="link" disabled>Link disabled</Button>
<Button className="custom-button">Customized button</Button>

<style>
  :global(.sd-button.custom-button) {
    --sd-primary: rgb(105, 34, 99);
    --sd-primary-hover: rgb(146, 47, 138);
    border-radius: 25px;
  }
</style>`;

export const config = { title: 'Button component', columns, data, usage };
