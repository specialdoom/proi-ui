---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### TextInput component

### Usage

```sveltehtml
<script>
import { TextInput } from '@specialdoom/proi-ui'

function onChange () {
    console.log('changed');
}
</script>

<TextInput value="Value" placeholder="Text input" disabled on:change={onChange}/>
```

### API

| Property    | Description                                                             | Type            | Default |
| ----------- | ----------------------------------------------------------------------- | --------------- | ------- |
| value       | Value of input                                                          | string          | ''      |
| placeholder | Placeholder of input                                                    | string          | ''      |
| error       | Whether the input is in error state                                     | boolean         | -       |
| disabled    | Whether the input is disabled                                           | boolean         | false   |
| className   | Class name of input container. Input component uses `.proi-input` class | string          | null    |
| ----------- | ---------------------------------------------                           | --------------- | ------- |
| on:change   | Handler for onChange input event                                        | (event) => void | -       |
