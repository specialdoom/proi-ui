<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Tabs from "../index.js";
  import ThemeStory from "../../../__stories__/ThemeStory.svelte";

  export let Hst: HstType;

  const overflowsTabs = [...Array(50).keys()].map((i) => ({
    title: `Tab ${i}`,
    index: i,
    disabled: 50 % i === 0
  }));
</script>

<ThemeStory
  {Hst}
  title="Tabs"
  layout={{ type: "grid", width: "100%" }}
>
  <Hst.Variant title="Default">
    <Tabs>
      <Tabs.Pane
        index={0}
        title="Tab 1">Pane 1 content</Tabs.Pane
      >
      <Tabs.Pane
        index={1}
        title="Tab 2">Pane 2 content</Tabs.Pane
      >
      <Tabs.Pane
        index={2}
        title="Tab 3">Pane 3 content</Tabs.Pane
      >
      <Tabs.Pane
        index={3}
        title="Tab 4">Pane 4 content</Tabs.Pane
      >
    </Tabs>
  </Hst.Variant>

  <Hst.Variant title="With disabled tabs">
    <Tabs>
      <Tabs.Pane
        index={0}
        title="Tab 1">Pane 1 content</Tabs.Pane
      >
      <Tabs.Pane
        index={1}
        title="Tab 2"
        disabled>Pane 2 content</Tabs.Pane
      >
      <Tabs.Pane
        index={2}
        title="Tab 3">Pane 3 content</Tabs.Pane
      >
      <Tabs.Pane
        index={3}
        title="Tab 4"
        disabled>Pane 4 content</Tabs.Pane
      >
    </Tabs>
  </Hst.Variant>

  <Hst.Variant title="Overflow">
    <Tabs>
      {#each overflowsTabs as tab, i}
        <Tabs.Pane
          index={i}
          title={tab.title}
          disabled={tab.disabled}
        >
          Pane {i} content
        </Tabs.Pane>
      {/each}
    </Tabs>
  </Hst.Variant>
</ThemeStory>
