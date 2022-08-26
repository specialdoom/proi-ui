---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Button component

### Usage

```sveltehtml
<script>
import { Button } from 'proi-ui'

function click () {
    console.log('clicked');
}
</script>

<Button on:click={click}>Click</Button>
```

### API

| Property  | Description                                                | Type       | Default   |
| --------- | ---------------------------------------------------------- | ---------- | --------- |
| variant      | Variant of button. Options: 'primary', 'secondary' and 'link' | string     | 'primary' |
| outlined  | Whether the button is outlined                             | boolean    | false     |
| disabled  | Whether the button is disabled                             | boolean    | false     |
| small     | Whether the button is small                                | boolean    | false     |
| className | Class name for button. Button component uses `.sd-button`  | string     | null      |
| --------- | ---------------------------------------------------------- | -------    | --------- |
| on:click  | Handler of the click event                                 | () => void | -         |
