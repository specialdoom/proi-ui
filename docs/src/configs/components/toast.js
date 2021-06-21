import { columns } from '../shared/columns';

export const data = [
  {
    property: 'ToastProvider',
    description: 'Component to add in the main app component',
    type: 'component',
    default: '-'
  },
  {
    property: 'toaster',
    description: `Object to use to be able to notify specific toasts. Has the 'send' method which takes a slice as a param. Slice has the following structure: {message: '', type: ''}. Types are: 'success', 'info', 'warning', 'error'. There are 4 specific methods to create a toast: 'success', 'warning', 'info' and 'error'; which takes a string param for the message of the toast.`,
    type: 'object',
    default: '-'
  }
];

export const usage = `<script>
import { toaster, Button } from 'proi-ui';

// assuming you added ToasterProvider to main app component

function notify(type) {
  toaster.send({ message: 'Toast message', type });
}
</script>

<Button on:click={() => notify('success')}>Success</Button>
<Button on:click={() => notify('error')}>Error</Button>
<Button on:click={() => notify('info')}>Info</Button>
<Button on:click={() => notify('warning')}>Warning</Button>
<Button on:click={() => toaster.success('Toast message')}>
  Success method
</Button>
<Button on:click={() => toaster.error('Toast message')}>Error method</Button>
<Button on:click={() => toaster.info('Toast message')}>Info method</Button>
<Button on:click={() => toaster.warning('Toast message')}>
  Warning method
</Button>`;

export const config = { title: 'Toast component', data, usage, columns };
