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

### Properties

| Property | Description                                                        | Type   | Default   |
| -------- | ------------------------------------------------------------------ | ------ | --------- |
| variant  | Variants of alert. Options: 'success', 'info', 'warning', 'error'. | string | 'success' |
| title    | Title of alert (required)                                          | string | ''        |
