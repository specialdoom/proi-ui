## @specialdoom/proi-ui

yet another Svelte ui library

![DevBadge](https://img.shields.io/badge/development-in%20progress-green)

<img src="https://github.com/specialdoom/proi-ui/blob/main/docs/src/assets/thumbnail.jpg" alt="thumbnail" width="100%"/>

## Installation
```bash
npm i @specialdoom/proi-ui
yarn add @specialdoom/proi-ui
```

## Check out docs [here](https://specialdoom.github.io/proi-ui/)

## Coming next
- multiple components
- update existing components

## v3.0.0 changes
- new components: Tabs, FormItem, Switch, TextInput (replacing Input), Badges & Pills (replacing Tag), 4 default Avatars (Lauren, Tim, Nikita, Leo)
- typescript support
- using sveltekit library mode`
- deprecate @specialdoom/proi-ui-icons

## Migrate to version 3.0.0
- import `@specialdoom/proi-ui/variables.css` for styling
- Alert component
  - `type` has become `variant`; options are: `success`, `error`, `warning`, `info`; default variant is `success`
  - `slot` is used for alert description
  - `title` :new: prop representing title of alert; required
  - usage: `<Alert variant='success' closable> Alert description </Alert>`
- Avatar component
    - `type` has become `variant`; options are `flame`, `vivid`, `mikado`, `tufts`, `neutral`, `pine`; default variant is `pine`
    - `title` prop has been removed
    - `initials` :new: prop representing initials of avatar
    - usage: `<Avatar initials="PI" variant="pine" />`
- Button component
  - `type` has become `variant`; options are: `primary`, `secondary` and `ghost`; default variant is `primary`
  - `outlined` and `small` props has been removed; `small` props will be addded in future changes regarding v3
- Modal component (:wastebasket:) has been removed and replaced with Dialog component
- Dropdown component 
  - `title` prop has been removed
  - `error` :new: prop representing error state of dropdown
  - `placeholder` :new: prop representing placeholder of dropdown
  - removed `className` and `listClassName` (:wastebasket:); will be added in future changes regarding v3
- Input component has been removed
- Progress component
  - `className` prop has been removed; will be added in future changes regardin v3
- Spinner component
  - `small` props has been removed
- Tag component has been removed
- Toast component and toaster
  - `type` props has become `variant`; options are `success`, `error`, `info`, `warning`
  - slice has a new structure `{title: 'Title of slice', description: 'Description (optional)', variant: 'success'}`