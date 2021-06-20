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
    description: "Wheather the alert it's outlined",
    type: 'boolean',
    default: 'false'
  },
  {
    property: 'closable',
    description: 'Wheather the alert can be closed',
    type: 'boolean',
    default: 'false'
  }
];

export const usage = `<script>
 import {Alert} from 'proi-ui';
</script>;

<Alert>Success alert message</Alert>
<Alert type="error">Error alert message</Alert>
<Alert type="info" outlined>Info alert message</Alert>
<Alert type="warning" closable>Closable alert warning message</Alert>`;

export const config = { title: 'Alert component', columns, data, usage };
