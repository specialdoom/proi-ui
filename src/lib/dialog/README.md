---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### Dialog component

### Usage

```sveltehtml
<script>
import { Dialog, Button } from 'proi-ui'

let showDialog = false;

function toggle() {
  showDialog = !showDialog;
}
</script>

<Button on:click={toggle}>Show dialog</Button>
<Dialog bind:visible={showDialog} title="Dialog Title" showActions={false}>
  Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
  lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud
  impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna aperiam.
</Dialog>
```

### API

#### Dialog

| Property    | Description                                             | Type       | Default   |
| ----------- | ------------------------------------------------------- | ---------- | --------- |
| visible     | Whether the dialog is visible                           | boolean    | false     |
| title       | Title of dialog                                         | string     | ''        |
| showActions | Whether the actions are visible or not                  | boolean    | true      |
| onOk        | Ok action handler                                       | () => void | undefined |
| onCancel    | Cancel action handler. Will fire on dialog close action | () => void | undefined |



