## Migrate to version 4.2.0

- deprecated `<ToastProvider>` component and `toaster` utility
- renamed `<Toast>` component to `<Notification>`

## Migrate to version 4.1.3

- no need to import `@specialdoom/proi-ui/variables.css` anymore because the css variables
  have fallback values
- if you want to use theming (light or dark) you need to wrap your app using `<Theme>`
  component e.g.

```html
<script>
  import Theme from "@specialdoom/proi-ui/Theme.svelte";
</script>

<Theme theme="light">
  <slot />
</Theme>
```

## Migrate to version 4.0.0

- import `@specialdoom/proi-ui/variables.css` for styling
- use default import for components (import what you need):

```html
<script>
  import Accordion from "@specialdoom/proi-ui/Accordion.svelte";
</script>
```

## Migrate to version 3.0.0

- import `@specialdoom/proi-ui/variables.css` for styling
- Alert component
  - `type` has become `variant`; options are: `success`, `error`, `warning`, `info`;
    default variant is `success`
  - `slot` is used for alert description
  - `title` :new: prop representing title of alert; required
  - usage: `<Alert variant='success' closable> Alert description </Alert>`
- Avatar component
  - `type` has become `variant`; options are `flame`, `vivid`, `mikado`, `tufts`,
    `neutral`, `pine`; default variant is `pine`
  - `title` prop has been removed
  - `initials` :new: prop representing initials of avatar
  - usage: `<Avatar initials="PI" variant="pine" />`
- Button component
  - `type` has become `variant`; options are: `primary`, `secondary` and `ghost`; default
    variant is `primary`
  - `outlined` and `small` props has been removed; `small` props will be addded in future
    changes regarding v3
- Modal component (:wastebasket:) has been removed and replaced with Dialog component
- Dropdown component
  - `title` prop has been removed
  - `error` :new: prop representing error state of dropdown
  - `placeholder` :new: prop representing placeholder of dropdown
  - removed `className` and `listClassName` (:wastebasket:); will be added in future
    changes regarding v3
- Input component has been removed
- Progress component
  - `className` prop has been removed; will be added in future changes regardin v3
- Spinner component
  - `small` props has been removed
- Tag component has been removed
- Toast component and toaster
