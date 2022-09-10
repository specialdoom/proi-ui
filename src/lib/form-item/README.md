---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### FormItem component

### Usage

```sveltehtml
<script>
import { FormItem } from '@specialdoom/proi-ui';
</script>

<FormItem
  label="Label"
  description="Description (optional)"
  error="Error message"
>
  Some input component
</FormItem>
```

### API

| Property    | Description                             | Type   | Default |
| ----------- | --------------------------------------- | ------ | ------- |
| label       | Label of form item component (required) | string | ''      |
| description | Description of form item component      | string | ''      |
| error       | Error message of form item component    | string | ''      |
