import { columns } from '../shared/columns';

export const data = [
  {
    property: 'type',
    description: `Types of alert. Options: 'success', 'info', 'warning', 'error'.`,
    type: 'string',
    default: `'success'`
  },
  {
    property: 'outlined',
    description: 'Whether the alert is outlined',
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'closable',
    description: 'Whether the alert can be closed',
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'className',
    description: 'Class name for alert container',
    type: 'string',
    default: 'null'
  }
];

export const usage = `<script>
 import { Alert } from 'proi-ui';
</script>;

<Alert className="custom-class-name">Hey. I've been customized</Alert>
<Alert>Success alert message</Alert>
<Alert type="error">Error alert message</Alert>
<Alert type="info" outlined>Info alert message</Alert>
<Alert type="warning" closable>Closable alert warning message</Alert>

<style>
  .sd-alert.custom-class-name {
    height: 50px;
  }
</style>
`;

export const config = { title: 'Alert component', columns, data, usage };
