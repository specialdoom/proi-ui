---

[proi-ui](https://github.com/specialdoom/proi-ui)

###### Tags components: Badge, Pill

### Usage

```sveltehtml
<script>
import Badge from '@specialdoom/proi-ui/Badge.svelte'
import Pill from '@specialdoom/proi-ui/Pill.svelte'
</script>

<Badge>Badge</Badge>
<Pill variant="flame">Pill</Pill>
```

### API

| Property | Description                                                                                             | Type   | Default |
| -------- | ------------------------------------------------------------------------------------------------------- | ------ | ------- |
| variant  | Variant of tag component (Badge or Pill). Options: `pine, neutral, makido, vivid, flame, tufts, bright` | string | 'pine'  |
| label    | Label of Pill/Badge component                                                                           | string | 'pine'  |
