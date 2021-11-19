import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'value',
    description: 'Value of input',
    type: '<code>string</code>',
    default: `<code>''</code>`
  },
  {
    property: 'type',
    description: `Type of input. <br /> Options: <code>text</code>, <code>password</code>`,
    type: '<code>string</code>',
    default: `<code>'text</code>'`
  },
  {
    property: 'placeholder',
    description: 'Placeholder of input',
    type: '<code>string</code>',
    default: `<code>''</code>`
  },
  {
    property: 'label',
    description: 'Label of input',
    type: '<code>string</code>',
    default: `<code>''</code>`
  },
  {
    property: 'error',
    description: 'Error message for input',
    type: '<code>string</code>',
    default: `<code>''</code>`
  },
  {
    property: 'disabled',
    description: 'Whether the input is disabled',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'className',
    description: 'Class name of input container. <br /> Input component uses <code>.sd-input</code> class',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: '----------',
    description: '----------',
    type: '----------',
    default: '----------'
  },
  {
    property: 'on:change',
    description: 'Handler for onChange input event',
    type: '<code>(event) => void</code>',
    default: '<code>-</code>'
  }
];

export const usage = `<script>
import { Input } from 'proi-ui'
</script>

<Input label="Custom label" value="Custom value" on:change={onChange} />
<Input
  label="Error label"
  value="Error value"
  error="Something is wrong..."
/>
<Input label="Disabled input" value="Disabled" disabled />
`;

export const config = { title: 'Input component', data, usage, columns };
