import TabPane from './TabPane.svelte';
import TabsComponent from './Tabs.svelte';

const Tabs = Object.assign(TabsComponent, {
  Pane: TabPane
});

export default Tabs;