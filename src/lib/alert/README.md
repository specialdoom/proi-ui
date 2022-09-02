---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Alert component

### Usage

```sveltehtml
<script>
 import { Alert } from '@specialdoom/proi-ui';
</script>;

<Alert title="Alert title">Default variant alert description</Alert>
<Alert type="error">Error variant alert with default title</Alert>
<Alert type="warning" closable>Closable warning variant alert with default title</Alert>
```

### API

| Property  | Description                                                              | Type    | Default   |
| --------- | ------------------------------------------------------------------------ | ------- | --------- |
| variant      | Variants of alert. Options: 'success', 'info', 'warning', 'error'.          | string  | 'success' |
| outlined  | Wheather the alert is outlined                                           | boolean | false     |
| closable  | Wheather the alert can be closed                                         | boolean | false     |
| className | Class name for alert container. Alert component uses the `.sd-alert` class | string  | `null`    |
