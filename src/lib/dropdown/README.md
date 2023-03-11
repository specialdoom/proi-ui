---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### Dropdown component

### Usage

You should bind to Dropdown selected attribute.

```sveltehtml
<script>
import Dropdown from '@specialdoom/proi-ui/Dropdown.svelte';

let options = [
  { label: "Label 1", value: "1" },
  { label: "Label 2", value: "2" },
];

let value;
</script>

<Dropdown
  bind:value
  {options}
  placeholder="Placeholder"
/>
```

### API

#### Properties

| Property      | Description                            | Type                                      | Default |
| ------------- | -------------------------------------- | ----------------------------------------- | ------- |
| `value`       | Value of Dropdown                      | `string`                                  | `''`    |
| `open`        | Whether the Dropdown is open           | `string`                                  | `''`    |
| `options`     | Options for select (required)          | `[DropdownOption](./dropdown.types.ts)[]` | -       |
| `placeholder` | Placeholder of Dropdown                | `string`                                  | `''`    |
| `disabled`    | Whether the Dropdown is disabled       | `boolean`                                 | `false` |
| `error`       | Whether the Dropdown is in error state | `boolean`                                 | `false` |
