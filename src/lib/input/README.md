---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### Input components

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

| Property    | Description                                                                     | Type            | Default |
| ----------- | ------------------------------------------------------------------------------- | --------------- | ------- |
| value       | Value of input                                                                  | string          | ''      |
| placeholder | Placeholder of input                                                            | string          | ''      |
| label       | Label of input                                                                  | string          | ''      |
| error       | error message                                                                   | string          | -       |
| disabled    | Whether the input is disabled                                                   | boolean         | false   |
| className   | Class name of input container. Input component uses `.sd-input-container` class | string          | null    |
| ----------- | ---------------------------------------------                                   | --------------- | ------- |
| on:change   | Handler for onChange input event                                                | (event) => void | -       |
