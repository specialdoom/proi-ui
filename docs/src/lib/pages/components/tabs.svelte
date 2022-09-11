<script>
  import { Tabs } from "@specialdoom/proi-ui";
  import FlexContainer from "../../components/display/FlexContainer.svelte";
  import Docs from "../../components/Docs.svelte";
  import { config } from "../../configs/components/tabs.js";

  const overflowsTabs = [...Array(50).keys()].map((i) => ({
    title: `Tab ${i}`,
    index: i,
    disabled: 50 % i === 0,
  }));
  const tabs = [...Array(8).keys()].map((i) => ({
    title: `Tab ${i}`,
    index: i,
    disabled: 50 % i === 0,
  }));
</script>

<Docs {config}>
  <FlexContainer justifyContent="flex-start" alignItems="flex-start">
    <Tabs>
      {#each tabs as tab}
        <Tabs.Pane title={tab.title} index={tab.index} disabled={tab.disabled}>
          Panel {tab.index}
        </Tabs.Pane>
      {/each}
    </Tabs>
    <Tabs>
      {#each overflowsTabs as tab}
        <Tabs.Pane title={tab.title} index={tab.index} disabled={tab.disabled}>
          Panel {tab.index}
        </Tabs.Pane>
      {/each}
    </Tabs>
  </FlexContainer>
</Docs>
