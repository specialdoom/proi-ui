## proi-ui

yet another Svelte ui library

![DevBadge](https://img.shields.io/badge/development-in%20progress-green)

![Logo](https://github.com/specialdoom/proi-ui/blob/master/src/assets/logo.png?raw=true 'proi-ui logo')

## Installation
```bash
npm i proi-ui
```

## Docs

Check out the [docs](https://specialdoom.github.io/proi-ui/).

## Coming next
- theming for components
- options to customise some components using `class` or `style` props

## Migrate to version 1.0.0

- Alert component
  - `status` prop changed to `type` prop in v1.0.0
  - there is no more `squared` prop, the alert is squared by default and only squared
- Avatar component
  - `name` prop changed to `title` prop in v1.0.0
  - `title` prop changed to `description` prop in v1.0.0
  - there is no more `squared` prop, the avatar is rounded only
- Backdrop component
  - `open` prop changed to `visible` prop in v1.0.0
- Button component
  - `status` prop chaned to `type` prop in v1.0.0
    - types are: 'primary', 'secondary' and 'link'
  - `medium` prop changed to `small` prop in v1.0.0
  - there is no more `squared` prop, the button is squared by default and only squared
- Checkbox component
  - there is no more `value` prop for the checkbox label, the label is used as a slot
- Chip component is now Tag component, see [Tag](https://github.com/specialdoom/proi-ui/tree/master/src/components/tag) component for more details
- Dropdown component design changes (does not affect previous versions)
- Input component
  - there is no more `squared` prop, the input is squared by default and only squared
  - there is no more `success` props
- Modal component
  - coming with two new components `ModalBody` and `ModalActions` instead of the named slots
  - `show` prop changed to `visible` prop in v1.0.0
  - new `title` prop for title of the modal
- Progress component
  - there is no more `height` prop, the progress component has a fixed height in v1.0.0
- Radio
  - there is no more `label` prop to display the label for the radio component, label is displayed using slot in v1.0.0
- Spinner
  - there is no more `labeled` prop, using existing `label` prop automatically decides the labeled state of the spinner component

## Basic Usage

```javascript
<script>
import { Button, Input } from 'proi-ui'

function click () {
    console.log('clicked');
}
</script>

<Input label="My label" />
<Button on:click={click}/>
```
