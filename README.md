proi-ui
---------
yet another Svelte ui library

![DevBadge](https://img.shields.io/badge/development-on%20pause-red)


![Logo](https://github.com/specialdoom/proi-ui/blob/master/src/assets/logo.png?raw=true "proi-ui logo")

> proi-ui Library for Svelte (beta).

## Installation
All controls
```bash
npm i proi-ui
```

## Docs
Check out the [docs](https://specialdoom.github.io/proi-ui/). (beta)

## Updates for 0.2.0 version
- toaster specific methods: error, info, warning and success
- new logo
- bug fix

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
