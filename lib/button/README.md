---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Button component

### Usage

```sveltehtml
<script>
import { Button } from '@specialdoom/proi-ui'

function click () {
    console.log('clicked');
}
</script>

<Button on:click={click}>Click</Button>
```

### API

| Property  | Description                                                    | Type       | Default   |
| --------- | -------------------------------------------------------------- | ---------- | --------- |
| variant   | Variant of button. Options: 'primary', 'secondary' and 'ghost' | string     | 'primary' |
| disabled  | Whether the button is disabled                                 | boolean    | false     |
| className | Class name for button. Button component uses `.proi-button`    | string     | null      |
| --------- | ----------------------------------------------------------     | -------    | --------- |
| on:click  | Handler of the click event                                     | () => void | -         |
