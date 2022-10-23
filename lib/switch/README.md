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

| Property | Description                      | Type    | Default |
| -------- | -------------------------------- | ------- | ------- |
| checked  | Whether the checkbox is checked  | boolean | false   |
| disabled | Whether the checkbox is disabled | boolean | false   |
