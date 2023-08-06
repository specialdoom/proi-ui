#### Properties

| Property      | Description                            | Type      | Default |
| ------------- | -------------------------------------- | --------- | ------- |
| `visible`     | Whether the Dialog is visible          | `boolean` | `false` |
| `title`       | Title of Dialog                        | `string`  | `''`    |
| `showActions` | Whether the actions are visible or not | `boolean` | `true`  |

#### Events

| Event name | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| `ok`       | Dispatched when user click on `Ok` action                                    |
| `cancel`   | Dispatched when user click on `Cancel` action or closes the dialog using `X` |

### `$$restProps`

- forwareded to the container of the `Dialog` component
