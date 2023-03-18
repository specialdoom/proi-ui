---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### Accordion and AccordionItem component

### Usage

```sveltehtml
<script>
  import Accordion from '@specialdoom/proi-ui/Accordion.svelte';
  import AccordionItem from '@specialdoom/proi-ui/AccordionItem.svelte';
</script>

<Accordion>
 <Accordion title="First item" open>First item content</AccordionItem>
 <Accordion title="Second item" closed>Second item content</AccordionItem>
</Accordion>
```

### AccordionItem properties

| Property   | Description                                    | Type      | Default |
| ---------- | ---------------------------------------------- | --------- | ------- |
| `title`    | Title of the `AccortionItem` (required)        | `string`  | `''`    |
| `open`     | Whether the `AccordionItem` is opened or not   | `boolean` | `false` |
| `disabled` | Whether the `AccordionItem` is disabled or not | `boolean` | `false` |

### Accordion Forwarded events

`on:click`, `on:focus`, `on:mouseenter`, `on:mouseover`, `on:mouseleave`
