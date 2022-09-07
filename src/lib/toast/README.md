---

[proi-ui](https://github.com/specialdoom/proi-ui)

### Usage

```sveltehtml
<script>
import { ToastProvider, toaster, Button } from '@specialdoom/proi-ui'

function notify () {
    toaster.send({
        title: "Title",
        variant: "info"
    });
}
</script>

<ToastProvider />
<Button on:click={() => toaster.success("Title", "Message")}>Success notification</Button>
<Button on:click={notify}>Info notification</Button>

```


### toaster object
```typescript
type SliceVariant = 'success' | 'error' | 'info' | 'warning';

type Slice = {
    // slice variant
    variant: SliceVariant;
    // toast message (optional)
    message: string;
    // toast title
    title: string;
}

// available methods

/**
 * Creates a new toast
 * @param {Slice} slice - Toast details
 */
send(slice: Slice);

/**
 * Creates a new [info, warning, error, success] toast
 * @param {string} title - Toast title
 * @param {string} message - Toast message (optional)
 */
info(title: string, message: string)
warning(title: string, message: string)
success(title: string, message: string)
error(title: string, message: string)
```

### API

| Property      | Description                                         | Type             |
| ------------- | --------------------------------------------------- | ---------------- |
| ToastProvider | Component to add in the main app component          | Svelte component |
| toaster       | Object containing the methods to create a new toast | object           |
