---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### Breadcrumb component

### Usage

```sveltehtml
<script>
  import Breadcrumb from "@specialdoom/proi-ui/Breadcrumb.svelte";
  import BreadcrumbItem from "@specialdoom/proi-ui/BreadcrumbItem.svelte";

</script>

<Breadcrumb>
  <BreadcrumbItem href="href" text="text" />
</Breadcrumb>
```

### Properties

#### BreadcrumbItem

| Property    | Description                                         | Type      | Default     |
| ----------- | --------------------------------------------------- | --------- | ----------- |
| `href`      | Set the `href` attribute for anchor tag. (required) | `string`  | `undefined` |
| `text`      | Inner text of anchor tag element. (required)        | `string`  | `undefined` |
| `isCurrent` | Whether the anchor tag represents current page .    | `boolean` | `false`     |
