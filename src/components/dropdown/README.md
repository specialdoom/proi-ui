---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### Dropdown component

### Usage

You should bind to Dropdown selected attribute.

```sveltehtml
<script>
import {Dropdown} from 'proi-ui';

let options = ["First option", "Second option", "Third option"];

let option = '';
let defaultSelectedOption = 'First option';
</script>

<Dropdown bind:selected={option} {options} title="No option selected" />
<Dropdown
  bind:selected={defaultSelectedOption}
  {options}
  title="No option selected"
/>
<Dropdown title="Disabled" disabled />
```

### API

| Property      | Description                           | Type    | Default |
| ------------- | ------------------------------------- | ------- | ------- |
| selected      | Current selected value                | option  | ''      |
| options       | Options for select                    | array   | []      |
| title         | Title for dropdown                    | string  | ''      |
| disabled      | Whether the dropdown is disabled      | boolean | false   |
| className     | Class name for dropdown container     | string  | null    |
| listClassName | Class name for options list container | string  | null    |
