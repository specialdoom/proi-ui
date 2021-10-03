import { columns } from '../shared/columns';

export const data = [
  {
    property: 'value',
    description: 'Value of input',
    type: 'string',
    default: `''`
  },
  {
    property: 'type',
    description: `Type of input. Options: 'text' and 'password'`,
    type: 'string',
    default: `'text'`
  },
  {
    property: 'placeholder',
    description: 'Placeholder of input',
    type: 'string',
    default: `''`
  },
  {
    property: 'label',
    description: 'Label of input',
    type: 'string',
    default: `''`
  },
  {
    property: 'error',
    description: 'Error message for input',
    type: 'string',
    default: `''`
  },
  {
    property: 'disabled',
    description: 'Whether the input is disabled',
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'className',
    description: 'Class name of input container',
    type: 'boolean',
    default: 'false'
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
    type: '(event) => void',
    default: '-'
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
<Input label="Customized label" value="Disabled" className="custom-input" />

<style>
  :global(.custom-input .sd-input) {
    color: purple;
  }
</style>
`;

export const config = { title: 'Input component', data, usage, columns };
