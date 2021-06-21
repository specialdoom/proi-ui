---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Backdrop component

### Usage

```sveltehtml
<script>
import { Backdrop } from 'proi-ui'

let isBackdropVisible = false;

function toggle(){
    isBackdropVisible = !isBackdropVisible;
}

</script>

<Backdrop visible={isBackdropVisible} on:click={toggle} />
<Backdrop visible={isBackdropVisible} on:click={toggle}>
    Backdrop with content
</Backdrop>
```

### API

| Property | Description                         | Type            | Default value |
| --------- | ----------------------------------- | --------------- | ------------- |
| visible   | Whether the backdrop is visible     | boolean         | false         |
| on:click  | Handler of the backdrop click event | (event) => void | false         |
