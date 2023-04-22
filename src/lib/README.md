## @specialdoom/proi-ui

yet another Svelte ui library

![DevBadge](https://img.shields.io/badge/development-in%20progress-green)

<img src="https://github.com/specialdoom/proi-ui/blob/main/docs/src/assets/thumbnail.jpg" alt="thumbnail" width="100%"/>

## Installation

```bash
npm i --save-dev @specialdoom/proi-ui
```

## Check out docs [here](https://specialdoom.github.io/proi-ui/)

## Coming next

- multiple components
- update existing components

## v4.0.0 changes

- using `@svelte/kit` lib mode
- no more named imports, import what you need

## Migrate to version 4.0.0

- import `@specialdoom/proi-ui/variables.css` for styling
- use default import for components (import what you need):

```
<script>
  import Accordion from "@specialdoom/proi-ui/Accordion.svelte";
</script>
```
