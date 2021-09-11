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
    property: 'class',
    description: 'Class name for alert container',
    type: 'string',
    default: `\'\'`
  }
];

export const usage = `<script>
 import { Alert } from 'proi-ui';
</script>;

<Alert className="custom-class-name">Success alert message</Alert>
<Alert type="error">Error alert message</Alert>
<Alert type="info" outlined>Info alert message</Alert>
<Alert type="warning" closable>Closable alert warning message</Alert>

<style>
  .custom-class-name {
    height: 20px;
  }
</style>
`;

export const config = { title: 'Alert component', columns, data, usage };
