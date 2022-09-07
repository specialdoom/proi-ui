import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'type',
    description: `Types of alert. <br />
    Options: <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>`,
    type: '<code>string</code>',
    default: `<code>success</code>`
  },
  {
    property: 'closable',
    description: 'Whether the alert can be closed',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'className',
    description: `Class name for alert container. <br />Alert component uses the <code>.proi-alert-container</code> class`,
    type: '<code>boolean</code>',
    default: '<code>null</code>'
  }
];

export const usage = `<script>
 import { Alert } from '@specialdoom/proi-ui';
</script>

<Alert title="Alert title">Default variant alert description</Alert>
<Alert type="error">Error variant alert with default title</Alert>
<Alert type="warning" closable>Closable warning variant alert with default title</Alert>
`;

export const config = { title: 'Alert component', columns, data, usage };
