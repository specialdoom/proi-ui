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

## Updates for 0.1.0 version
- using proi-ui-icons as a dev dependency for component's icons
- components updated:
    - alert component
    - dropdown component
    - chip component
    - modal component
- dropdown component architecture

## Latest update changes
- dropdown component leaking style
- dropdown component type
- decreased top position for dropdown list

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
