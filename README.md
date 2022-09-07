## proi-ui

yet another Svelte ui library

![DevBadge](https://img.shields.io/badge/development-in%20progress-green)

<img src="https://github.com/specialdoom/proi-ui/blob/master/src/assets/logo.png" alt="drawing" width="40%"/>

## Installation
```bash
npm i @specialdoom/proi-ui
```

## Docs

Check out the [docs](https://specialdoom.github.io/proi-ui/).

## Coming next
- other components
- using a styling preprocessor for styling components
- include components style in main styling file

## Migrate to version 3.0.0

- you have to import `@specialdoom/proi-ui/variables.css` for styling

## Basic Usage

```javascript
<script>
import { Button, Input } from '@specialdoom/proi-ui'

function click () {
    console.log('clicked');
}
</script>

<Input label="My label" />
<Button on:click={click}/>
```
