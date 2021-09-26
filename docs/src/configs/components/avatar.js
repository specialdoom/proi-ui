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
  },
  {
    property: 'className',
    description: 'Class name for avatar container',
    type: 'string',
    default: 'null'
  }
];

export const usage = `<script>
 import { Avatar } from 'proi-ui';
</script>;

<Avatar title="Proi Ui" description="Library" />
<Avatar image="https://avatars.githubusercontent.com/u/41910815?v=4" />
<Avatar className="custom-alias-class" title="Proi Ui" description="Library" />
<Avatar
  title="specialdoom"
  description="creator"
  image="https://avatars.githubusercontent.com/u/41910815?v=4"
/>

<style>
  :global(.custom-alias-class .sd-avatar-alias) {
    border: 2px dashed green;
  }
</style>
`;

export const config = { title: 'Avatar component', columns, data, usage };
