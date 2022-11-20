---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### Radio component

### Usage

```sveltehtml
<script>
import { Radio } from '@specialdoom/proi-ui';

let options = [
  { text: 'First', value: 1 },
  { text: 'Second', value: 2 },
  { text: 'Third', value: 3 }
];
let radio = 1;
</script>

{#each options as option}
  <Radio value={option.value} bind:group={radio}>{option.text}</Radio>
  <br />
{/each}
<Radio value={4} bind:group={radio} disabled>Forth disabled</Radio>
```

### API

| Property | Description                   | Type                | Default   |
| -------- | ----------------------------- | ------------------- | --------- |
| value    | Value of radio                | `number  \| string` | undefined |
| group    | Group value                   | `number  \| string` | undefined |
| disabled | Whether the radio is disabled | boolean             | false     |
