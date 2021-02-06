proi-ui
---------
yet another Svelte ui library

![Logo](https://github.com/specialdoom/proi-ui/blob/master/src/assets/logo.png?raw=true "proi-ui logo")

> proi-ui Library for Svelte (beta).

## Installation
All controls
```bash
npm i proi-ui
```

## Docs
Check out the [docs](https://specialdoom.github.io/proi-ui/). (beta)

## Update for 0.1.12 version
- using latest proi-ui-icons version
- new logo
- solved warnings regarding the uniqueness of the input id

## Updates for 0.1.0 version
- using proi-ui-icons as a dev dependency for component's icons
- dropdown component architecture
- toasts

## Basic Usage
```javascript
<script>
import { Button, Input } from 'proi-ui'

function click () {
    console.log('clicked');
}
</script>

<div>
    <Input label="My label" squared />
    <Button on:click={click}/>
</div>
```
