### Properties

| Property      | Description                                                                                                                        | Type                  | Default   |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------- |
| `variant`     | Value of the `variant` property of `Notification` component. Available variants: `info`, `success`, `warning`, `error`. (required) | `NotificationVariant` | `success` |
| `title`       | Value of the `title` property of `Notification` component. (required)                                                              | `string`              | -         |
| `description` | Value of the `description` property of `Notification` component. Used to display a short description of the notification.          | `string`              | `""`      |

### Forwarded events

`on:click`, `on:focus`, `on:mousedown`, `on:mouseenter`, `on:mouseleave` to close `button`
element

### `$$restProps`

- forwareded to the container of the `Notification` component
