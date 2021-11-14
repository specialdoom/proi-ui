import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'title',
    description: 'Title of the avatar',
    type: '<code>string</code>',
    default: `<code>''</code>`
  },
  {
    property: 'description',
    description: 'Short description of the avatar',
    type: '<code>string</code>',
    default: `<code>''</code>`
  },
  {
    property: 'image',
    description: 'Source of avatar image',
    type: '<code>string</code>',
    default: `<code>''</code>`
  },
  {
    property: 'className',
    description: `Class name for avatar container. <br /> Avatar component uses the <code>.sd-avatar</code>`,
    type: '<code>string</code>',
    default: '<code>null</code>'
  }
];

export const usage = `<script>
 import { Avatar } from 'proi-ui';
</script>;

<Avatar title="Proi Ui" description="Library" />
<Avatar image="https://avatars.githubusercontent.com/u/41910815?v=4" />
<Avatar
  title="specialdoom"
  image="https://avatars.githubusercontent.com/u/41910815?v=4"
/>
`;

export const config = { title: 'Avatar component', columns, data, usage };
