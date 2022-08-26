import type { TableData } from '../config.types.js';
import { columns } from '../shared/columns.js';

export const tableData: TableData[] = [
  {
    property: 'ToastProvider',
    description: 'Component to add in the main app component',
    type: '<code>component</code>',
    default: '<code>-</code>'
  },
  {
    property: 'toaster',
    description: `Object to use to be able to notify specific toasts. <br /> 
    Has the <code>send</code> method which takes a slice as a param. Slice has the following structure: <code>{ message: '', type: '' }</code>. <br />
    Types are: <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>.<br /> 
    There are 4 specific methods to create a toast: <code>success</code>, <code>warning</code>, <code>info</code> and <code>error</code>; which takes a <code>string param</code> for the message of the toast.`,
    type: '<code>object</code>',
    default: '<code>-</code>'
  }
];

export const usage: string = `<script>
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
<Button on:click={() => toaster.success('Toast message')}>Success method</Button>
<Button on:click={() => toaster.error('Toast message')}>Error method</Button>
<Button on:click={() => toaster.info('Toast message')}>Info method</Button>
<Button on:click={() => toaster.warning('Toast message')}>Warning method</Button>`;

export const config = { title: 'Toast component', tableData, usage, columns };
