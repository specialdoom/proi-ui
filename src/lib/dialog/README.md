---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### Dialog component

### Usage

```sveltehtml
<script>
import Button from '@specialdoom/proi-ui/Button.svelte';
import Dialog from '@specialdoom/proi-ui/Dialog.svelte';

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

#### Properties

| Property      | Description                            | Type      | Default |
| ------------- | -------------------------------------- | --------- | ------- |
| `visible`     | Whether the Dialog is visible          | `boolean` | `false` |
| `title`       | Title of Dialog                        | `string`  | `''`    |
| `showActions` | Whether the actions are visible or not | `boolean` | `true`  |

#### Events

| Event name | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| `ok`       | Dispatched when user click on `Ok` action                                    |
| `cancel`   | Dispatched when user click on `Cancel` action or closes the dialog using `X` |
