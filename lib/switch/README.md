---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Switch component

### Usage

You should bind to Switch checked attribute.

```sveltehtml
<script>
import { Switch } from '@specialdoom/proi-ui'

</script>

<Switch bind:checked>{checked ? 'Checked' : 'Unchecked'}</Switch>
<Switch checked={true} disabled>Checked disabled</Switch>
<Switch checked={false} disabled>Unchecked disabled</Switch>
```

### API

| Property   | Description                          | Type      | Default |
|------------|--------------------------------------|-----------|---------|
| `checked`  | Whether the Switch is checked        | `boolean` | `false` |
| `disabled` | Whether the Switch is disabled       | `boolean` | `false` |
| `error`    | Whether the Switch is in error state | `boolean` | `false` |

#### Slots

| Name       | Description               |
|------------|---------------------------|
| `default`  | Label of Switch component |