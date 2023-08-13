---
id: "getting-started"
group: "a"
icon: "carbon:rocket"
title: "2. Getting started"
---

# Instalation

We recommend using npm or yarn to install, it not only makes development easier, but also
allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

```
npm i --save-dev @specialdoom/proi-ui
yarn add --save-dev @specialdoom/proi-ui
```

---

# Styling and theming (optional)

Import the `Theme` component from `@specialdoom/proi-ui`:

```html
<script>
  import Theme from "@specialdoom/proi-ui/Theme.svelte";
  import Button from "@specialdoom/proi-ui/Button.svelte";
</script>

<Theme>
  <Button>Click me</Button>
</Theme>
```

Right now there are two default options for theming: `dark` and `light`. If you don't want
to use theming, you can use the components as they are with the provided fallback
variables values representing `light` version.

---

# Enjoy and have fun!
