import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'variant',
    description: 'Variant of tag component (Badge or Pill). Options: <code>pine, neutral, vivid, tufts, makido, flame</code>',
    type: '<code>string</code>',
    default: '<code>pine</code>'
  }
];

export const usage = `<script>
import { Badge, Pill } from '@specialdoom/proi-ui';
</script>

<Badge>Tag</Badge>
<Pill>Tag</Pill>
`;

export const config = { title: 'Tags components', usage, data, columns };
