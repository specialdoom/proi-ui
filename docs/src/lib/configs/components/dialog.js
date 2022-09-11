import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'visible',
    description: 'Whether the dialog is visible',
    type: '<code>boolean</code>',
    default: '<code>false</code>'
  },
  {
    property: 'title',
    description: 'Title of dialog',
    type: '<code>string</code>',
    default: `<code>''</code>`
  },
  {
    property: 'showActions',
    description: 'Whether the actions are visible or not',
    type: '<code>boolean</code>',
    default: `<code>true</code>`
  },
  {
    property: 'onOk',
    description: 'Ok action handler',
    type: '<code>() => void</code>',
    default: `<code>undefined</code>`
  },
  {
    property: 'onCancel',
    description: 'Cancel action handler. Will fire on dialog close action',
    type: '<code>() => void</code>',
    default: `<code>undefined</code>`
  }
];

export const usage = `<script>
  import { Dialog, Button } from '@specialdoom/proi-ui';

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
`;

export const config = { title: 'Dialog component', data, usage, columns };
