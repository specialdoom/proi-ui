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

# Use styling

Inside your main app file or inside your `global.css` file import `variables.css` file for
styling.

```css
@import "@specialdoom/proi-ui/variables.css";
```

```javascript
import "@specialdoom/proi-ui/variables.css";
```

---

# Theming (optional)

We allow you to customize our design tokens to satisfy UI diversity.

Customize in `css` file

```css
@import "@specialdoom/proi-ui/variables.css";
@import "override-variables.css";
```

Customize in `js` file

```javascript
import "@specialdoom/proi-ui/variables.css";
import "override-variables.css";
```

# Enjoy and have fun

Basic usage

```svelte
<script>
  import Button from "@specialdoom/proi-ui/Button.svelte";
</script>

<Button>Click me</Button>
```
