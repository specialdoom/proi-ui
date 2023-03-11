---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Switch component

### Usage

```sveltehtml
<script>
  import Button from '@specialdoom/proi-ui/Button.svelte';
  import Progress from '@specialdoom/proi-ui/Progress.svelte';

  let percent = 67;
  let error = true;
</script>

<Progress {percent} />
<Progress {percent} {error} />
```

### API

### Properties

| Property        | Description                                    | Type      | Default value |
| --------------- | ---------------------------------------------- | --------- | ------------- |
| `percent`       | Current percent of Progress                    | `number`  | `0`           |
| `error`         | Whether the Progress is in error state         | `boolean` | `false`       |
| `indeterminate` | Whether the Progress is in indeterminate state | `boolean` | `false`       |
| `small`         | Whether the Progress is small                  | `boolean` | `false`       |
