### Properties

| Property           | Description                                   | Type      | Default        |
| ------------------ | --------------------------------------------- | --------- | -------------- |
| `title`            | Title of Card component (required)            | `string`  | `''`           |
| `description`      | Description of Card component (required)      | `string`  | `''`           |
| `imageSrc`         | Image source for image variant                | `string`  | `''`           |
| `imageDescription` | Alt attribute of image                        | `string`  | `'Card image'` |
| `closable`         | Wether the Card component is closable or not. | `boolean` | `false`        |

#### Events

| Event name | Description                                        |
| ---------- | -------------------------------------------------- |
| `cancel`   | Dispatched when user click on cancel button action |

#### Slots

- use `actions` named slot to display actions for the target Card component
