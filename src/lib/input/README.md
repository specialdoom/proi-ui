---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### Input component

### Usage

```sveltehtml
<script>
import { Input } from '@specialdoom/proi-ui'

function onChange () {
    console.log('changed');
}
</script>

<Input label="Custom label" value="Custom value" on:change={onChange}/>
<Input
label="Error label"
value="Error value"
error="Something is wrong..."
/>
<Input label="Disabled input" value="Disabled" disabled />
```

### API

| Property    | Description                                                                     | Type            | Default |
| ----------- | ------------------------------------------------------------------------------- | --------------- | ------- |
| value       | Value of input                                                                  | string          | ''      |
| variant        | Variant of input. Options: 'text' and 'password'                                   | string          | 'text'  |
| placeholder | Placeholder of input                                                            | string          | ''      |
| label       | Label of input                                                                  | string          | ''      |
| error       | error message                                                                   | string          | -       |
| disabled    | Whether the input is disabled                                                   | boolean         | false   |
| className   | Class name of input container. Input component uses `.sd-input-container` class | string          | null    |
| ----------- | ---------------------------------------------                                   | --------------- | ------- |
| on:change   | Handler for onChange input event                                                | (event) => void | -       |
