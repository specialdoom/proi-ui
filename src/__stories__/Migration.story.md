---
id: "migrate-to-v4"
group: "a"
icon: "carbon:migrate"
title: "3. Migrate to v4.0.0"
---

## Migrate to version 4.0.0

- import `@specialdoom/proi-ui/variables.css` for styling
- use default import for components (import what you need):

```html
<script>
  import Accordion from "@specialdoom/proi-ui/Accordion.svelte";
</script>
```

## Migrate to version 4.1.2

- no need to import `@specialdoom/proi-ui/variables.css` anymore because the css variables
  have fallback values
- if you want to use theming (light or dark) you need to wrap your app using `<Theme>`
  component e.g.

```html
<script>
  import Theme from "@specialdoom/proi-ui/Theme.svelte";
</script>

<Theme theme="light">
  <slot />
</Theme>
```
