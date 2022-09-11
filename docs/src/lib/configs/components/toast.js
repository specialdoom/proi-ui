import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'ToastProvider',
    description: 'Component to add in the main app component',
    type: '<code>SvelteComponent</code>',
    default: 'N/A'
  },
  {
    property: 'toaster',
    description: 'Object containing the methods to create a new toast',
    type: 'N/A',
    default: 'N/A'
  }
];

export const usage = `<script>
import { toaster, Button } from '@specialdoom/proi-ui';

// don't forget to add ToasterProvider to main app component

function notify () {
  toaster.send({
      title: "Title",
      variant: "info"
  });
}
</script>

<Button on:click={() => toaster.success("Title", "Message")}>Success notification</Button>
<Button on:click={notify}>Info notification</Button>`;

export const config = { title: 'Toast component', data, usage, columns };
