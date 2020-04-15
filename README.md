proi-ui
---------
![Logo](https://github.com/specialdoom/proi-ui/blob/master/src/assets/logo.png?raw=true "proi-ui logo")

> proi UI Library for Svelte/Sapper (beta).
## Installation
All controls
```bash
npm i proi-ui
```

## Docs
Check out the [docs](https://proi-ui.herokuapp.com/). (beta)

## Basic Usage
For more usage check README.md from components!
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