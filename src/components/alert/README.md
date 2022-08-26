---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Alert component

### Usage

```sveltehtml
<script>
 import {Alert} from 'proi-ui';
</script>;

<Alert>Success alert message</Alert>
<Alert variant="error">Error alert message</Alert>
<Alert variant="info" outlined>Info alert message</Alert>
<Alert variant="warning" closable>Closable alert warning message</Alert>
```

### API

| Property  | Description                                                              | Type    | Default   |
| --------- | ------------------------------------------------------------------------ | ------- | --------- |
| variant      | Variants of alert. Options: 'success', 'info', 'warning', 'error'.          | string  | 'success' |
| outlined  | Wheather the alert is outlined                                           | boolean | false     |
| closable  | Wheather the alert can be closed                                         | boolean | false     |
| className | Class name for alert container. Alert component uses the `.sd-alert` class | string  | `null`    |
