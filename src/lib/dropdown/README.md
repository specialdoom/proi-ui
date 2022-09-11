---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### Dropdown component

### Usage

You should bind to Dropdown selected attribute.

```sveltehtml
<script>
import {Dropdown} from '@specialdoom/proi-ui';

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

| Property    | Description                            | Type                                    | Default |
| ----------- | -------------------------------------- | --------------------------------------- | ------- |
| value       | Value of dropdown                      | string                                  | ''      |
| options     | Options for select                     | [DropdownOption](./dropdown.types.ts)[] | []      |
| placeholder | Placeholder of dropdown                | string                                  | ''      |
| disabled    | Whether the dropdown is disabled       | boolean                                 | false   |
| error       | Whether the dropdown is in error state | boolean                                 | false   |