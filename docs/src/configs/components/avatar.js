import { columns } from '../shared/columns';

export const data = [
  {
    property: 'title',
    description: 'Title of the avatar',
    type: 'string',
    default: `''`
  },
  {
    property: 'description',
    description: 'Short description of the avatar',
    type: 'string',
    default: `''`
  },
  {
    property: 'image',
    description: 'Source of avatar image',
    type: 'string',
    default: `''`
  }
];

export const usage = `<script>
 import { Avatar } from 'proi-ui';
</script>;

<Avatar title="Proi Ui" description="Library" />
<Avatar
  title="specialdoom"
  description="creator"
  image="https://avatars.githubusercontent.com/u/41910815?v=4"
/>`;

export const config = { title: 'Avatar component', columns, data, usage };
