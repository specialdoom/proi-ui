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
    // or
    toaster.error("Notification message");
    toaster.warning("Notification message");
    toaster.info("Notification message");
    toaster.success("Notification message");

}
</script>

<ToastProvider />
<Button on:click={() => notify("success")}>Success notification</Button>
<Button on:click={() => notify("info")}>Info notification</Button>
<Button on:click={() => notify("error")}>Error notification</Button>
<Button on:click={() => notify("warning")}>Warning notification</Button>

```

### API

| Property      | Description                                                                                                                                                                                                                                                                                                                                                               | Type      | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| ToastProvider | Component to add in the main app component                                                                                                                                                                                                                                                                                                                                | component | -       |
| toaster       | Object to use to be able to notify specific toasts. Has the 'send' method which takes a slice as a param. Slice has the following structure: {message: '', type: ''}. Types are: 'success', 'info', 'warning', 'error'. There are 4 specific methods to create a toast: 'success', 'warning', 'info' and 'error'; which takes a string param for the message of the toast | object    | -       |
