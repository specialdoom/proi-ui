### Properties

| Property      | Description                                                                                    | Type      | Default  |
| ------------- | ---------------------------------------------------------------------------------------------- | --------- | -------- |
| `title`       | Title of `FillCard` component (required)                                                       | `string`  | `''`     |
| `description` | Description of `FillCard` component (required)                                                 | `string`  | `''`     |
| `variant`     | Variant of `FillCard` component. Options: `pine, neutral, makido, vivid, flame, tufts, bright` | `string`  | `'pine'` |
| `closable`    | Whether the `FillCard` component is closable or not.                                           | `boolean` | `false`  |

#### Events

| Event name | Description                                 |
| ---------- | ------------------------------------------- |
| `close`    | Dispatched when user click on close button. |

### `$$restProps`

- forwareded to the container of the `FillCard` component
