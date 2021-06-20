---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Alert component

### Usage

```sveltehtml
<script>
 import {Alert} from 'proi-ui';
</script>;

<Alert>Success alert message</Alert>
<Alert type="error">Error alert message</Alert>
<Alert type="info" outlined>Info alert message</Alert>
<Alert type="warning" closable>Closable alert warning message</Alert>
```

### API

| Property | Description                                                     | Type    | Default   |
| -------- | --------------------------------------------------------------- | ------- | --------- |
| type     | Types of alert. Options: 'success', 'info', 'warning', 'error'. | string  | 'success' |
| outlined | Wheather the alert is outlined                                | boolean | false     |
| closable | Wheather the alert can be closed                                | Boolean | false     |
