import { columns } from '../shared/columns';

export const data = [
  {
    property: 'color',
    description: 'Color of the tag',
    type: 'string',
    default: '#2398ab'
  },
  {
    property: 'outlined',
    description: 'Whether the tag is outlined',
    type: 'boolean',
    default: 'false'
  }
];

export const usage = `<script>
import { Tag } from 'proi-ui';
</script>

<Tag>Tag</Tag>
<Tag outlined>Tag</Tag>
<Tag className="custom-tag">Customized Tag</Tag>

<style>
  :global(.sd-tag.custom-tag) {
    background-color: purple;
  }
</style>
`;

export const config = { title: 'Tag component', usage, data, columns };
