---
[proi-ui](https://github.com/specialdoom/proi-ui)
### Usage
```sveltehtml
<script>
import { ToastProvider, toaster, Button } from 'proi-ui'

function notify (type) {
    toaster.send({
        message: "Notification message",
        type: type
    });
}
</script>

<ToastProvider />
<Button on:click={() => notify("success")}>Success notification</Button>
<Button on:click={() => notify("info")}>Info notification</Button>
<Button on:click={() => notify("error")}>Error notification</Button>
<Button on:click={() => notify("warning")}>Warning notification</Button>

```
### Objects
| Name | Type | Used for |
| --- | --- | --- |
| ToastProvider | Component | Providing toasts container|
| toaster | Object | Providing send method to send a toast | 

### toaster
Has the **send** method used to send a toast and takes an object parameter having 2 properties

| Property name | Value | Details |
| --- | --- | --- |
| message | String value | Message to display inside the toast |
| type | success, info, warning, error | Type of toast |