import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'initials',
    description: 'Initials to display',
    type: '<code>string</code>',
    default: `<code>''</code>`
  },
  {
    property: 'color',
    description: 'Text color of avatar. Available when <code>initials</code> not empty',
    type: '<code>string</code>',
    default: `<code>'#EFF1F3'</code>`
  },
  {
    property: 'background',
    description: 'Background color of avatar. Available when <code>initials</code> not empty',
    type: '<code>string</code>',
    default: `<code>'#357266'</code>`
  },
  {
    property: 'image',
    description: 'Image source of avatar',
    type: '<code>string</code>',
    default: `<code>''</code>`
  }
];

export const usage = `<script>
 import { Avatar } from '@specialdoom/proi-ui';
</script>

<Avatar initials="PI" />
<Avatar image="https://avatars.githubusercontent.com/u/41910815?v=4" />
<Avatar.Leo />
<Avatar.Lauren />
<Avatar.Nikita />
<Avatar.Tim />
`;

export const config = { title: 'Avatar component', columns, data, usage };
