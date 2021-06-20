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

| Property | Description                                                | Type    | Default   |
| --------- | ---------------------------------------------------------- | ------- | --------- |
| type      | Type of button. Options: 'primary', 'secondary' and 'link' | string  | 'primary' |
| outlined  | Whether the button it's outlined                           | boolean | false     |
| disabled  | Whether the button it's disabled                           | boolean | false     |
| small     | Whether the button it's small                              | boolean | false     |
| on:click  | Handler of the click event                                 | false   |
