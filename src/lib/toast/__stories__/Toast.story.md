### toaster object

```typescript
type ToastVariant = 'success' | 'error' | 'info' | 'warning';

type Slice = {
    // slice variant
    variant: ToastVariant;
    // toast description (optional)
    description: string;
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
 * @param {string} description - Toast description (optional)
 */
info(title: string, description: string)
warning(title: string, description: string)
success(title: string, description: string)
error(title: string, description: string)
```

### API

| Property            | Description                                               | Type                           |
| ------------------- | --------------------------------------------------------- | ------------------------------ |
| `<ToastProvider />` | Svelte component representing the container of the toasts | `Constructor<SvelteComponent>` |
| `toaster`           | Object containing the methods to create a new toast       | `Object`                       |
