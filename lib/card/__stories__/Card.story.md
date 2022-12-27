### Properties

| Property           | Description                                                                    | Type      | Default        |
| ------------------ | ------------------------------------------------------------------------------ | --------- | -------------- |
| `title`            | Title of Card component (required)                                             | `string`  | `''`           |
| `description`      | Description of Card component (required)                                       | `string`  | `''`           |
| `imageSrc`         | Image source for image variant                                                 | `string`  | `''`           |
| `imageDescription` | Alt attribute of image                                                         | `string`  | `'Card image'` |
| `showAction`       | Whether to display the action button or not                                    | `boolean` | `false`        |
| `actionLabel`      | Specify the label of action button                                             | `string`  | `'Action'`     |
| `showCancelAction` | Whether to display the action button or not. Works only with `showAction` true | `boolean` | `false`        |

#### Events

| Event name | Description                                        |
| ---------- | -------------------------------------------------- |
| `action`   | Dispatched when user click on action button        |
| `cancel`   | Dispatched when user click on cancel button action |
