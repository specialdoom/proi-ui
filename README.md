proi-ui
---------
yet another Svelte/Sapper UI library

![Logo](https://github.com/specialdoom/proi-ui/blob/master/src/assets/logo.png?raw=true "proi-ui logo")

> proi UI Library for Svelte/Sapper (beta).

## Installation
All controls
```bash
npm i proi-ui
```

## Docs
Check out the [docs](http://proi-ui.com/). (beta)

## Latest update changes
- bug fix
    - input bug fix
- added toasts

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
