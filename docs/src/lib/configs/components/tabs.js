import { columns } from '../shared/columns.js';

export const data = [
  {
    property: 'index',
    description: 'Index of tab pane (required)',
    type: '<code>number</code>',
    default: '<code>undefined</code>'
  },
  {
    property: 'title',
    description: `Title of tab`,
    type: '<code>string</code>',
    default: `<code>undefined</code>`
  },
  {
    property: 'disabled',
    description: `Whether the tab is disabled`,
    type: '<code>boolean</code>',
    default: `<code>false</code>`
  }
];

export const usage = `<script>
  import { Tabs } from '@specialdoom/proi-ui';
</script>

<Tabs>
  <Tabs.Pane index={0} title="Tab 1">
    Pane 1 content
  </Tabs.Pane>
  <Tabs.Pane index={2} title="Tab 2">
    Pane 2 content
  </Tabs.Pane>
</Tabs>`;

export const config = { title: 'Tabs component', data, usage, columns };
