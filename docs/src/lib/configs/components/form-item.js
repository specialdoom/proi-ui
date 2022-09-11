import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'label',
    description: 'Form item label',
    type: '<code>string</code>',
    default: '<code>\'\'</code>'
  },
  {
    property: 'description',
    description: 'Form item description',
    type: '<code>string</code>',
    default: `<code>''</code>`
  },
  {
    property: 'error',
    description: 'Form item error message. Whether the form item is in error state',
    type: '<code>string</code>',
    default: `<code>''</code>`
  }
];

export const usage = `<script>
  import { FormItem, TextInput } from '@specialdoom/proi-ui';
</script>

<FormItem label="Label" description="description">
  <TextInput value="Test" placeholder="Placeholder" />
</FormItem>
`;

export const config = { title: 'FormItem component', data, usage, columns };
