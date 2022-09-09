import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'value',
    description: 'Value of input',
    type: '<code>string</code>',
    default: `<code>''</code>`
  },
  {
    property: 'placeholder',
    description: 'Placeholder of input',
    type: '<code>string</code>',
    default: `<code>''</code>`
  },
  {
    property: 'error',
    description: 'Whether the input is in error state',
    type: '<code>boolean</code>',
    default: `<code>false</code>`
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
import { TextInput } from '@specialdoom/proi-ui'
</script>

<TextInput value="Value" placeholder="Text input" disabled on:change={onChange}/>
<TextInput placeholder="Disabled input" disabled/>
`;

export const config = { title: 'Input component', data, usage, columns };
