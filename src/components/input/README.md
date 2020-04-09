---
[proi-ui](https://github.com/specialdoom/proi-ui)
### Usage
```javascript
<script>
import { Input } from 'proi-ui'

function changed () {
    console.log('changed');
}
</script>

<div>
    <Input on:change={changed} label="Custom label" value="Custom value"/>
</div>
```
### Attributes
| Parameter   | description       | type    | optional value | default value |
|-------------|-------------------|---------|----------------|---------------|
| Value       | display text      | String  | -              | -             |
| Type        | type              | String  | text, password | text          |
| Squared     | square display    | Boolean | -              | false         |
| Placeholder | input placeholder | String  | -              | -             |
| Label       | input label       | String  | -              | Label         |
| Error       | error message     | String  | -              | -             |
| Success     | success display   | Boolean | -              | false         |
| Disabled     | disable input   | Boolean | -              | false         |
### Events
| Event name | description       | callback parameter |
|------------|-------------------|--------------------|
| on:change  | change to trigger | event              |