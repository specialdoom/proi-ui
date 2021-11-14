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
    property: 'outlined',
    description: 'Whether the alert is outlined',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'closable',
    description: 'Whether the alert can be closed',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'className',
    description: `Class name for alert container. <br />Alert component uses the <code>.sd-alert</code> class`,
    type: '<code>boolean</code>',
    default: '<code>null</code>'
  }
];

export const usage = `<script>
 import { Alert } from 'proi-ui';
</script>;

<Alert>Success alert message</Alert>
<Alert type="error">Error alert message</Alert>
<Alert type="info" outlined>Info alert message</Alert>
<Alert type="warning" closable>Closable alert warning message</Alert>
`;

export const config = { title: 'Alert component', columns, data, usage };
