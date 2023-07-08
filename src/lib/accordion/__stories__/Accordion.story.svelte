<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Accordion from "../Accordion.svelte";
  import AccordionItem from "../AccordionItem.svelte";
  import { multiItemsSource, singleItemSource } from "./accordion.source";
  import ThemeStory from "../../histoire/ThemeStory.svelte";

  export let Hst: HstType;
</script>

<ThemeStory
  {Hst}
  title="Accordion"
  layout={{ type: "grid", width: "100%" }}
>
  <Hst.Variant
    title="Multi items"
    source={multiItemsSource()}
  >
    <Accordion>
      <AccordionItem title="First item">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </AccordionItem>
      <AccordionItem title="Second item">
        Nunc id cursus metus aliquam eleifend mi in nulla posuere. Tempor id eu nisl nunc
        mi. Non curabitur gravida arcu ac. Viverra nam libero justo laoreet sit amet
        cursus.
      </AccordionItem>
      <AccordionItem title="Third item">
        Morbi non arcu risus quis varius quam quisque id. Diam maecenas sed enim ut. Duis
        convallis convallis tellus id interdum.
      </AccordionItem>
    </Accordion>
  </Hst.Variant>

  <Hst.Variant
    title="Single item"
    source={singleItemSource}
  >
    <Accordion>
      <AccordionItem title="First item">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </AccordionItem>
    </Accordion>
  </Hst.Variant>

  <Hst.Variant
    title="With opened item"
    source={multiItemsSource(true)}
  >
    <Accordion>
      <AccordionItem
        title="First item"
        open
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </AccordionItem>
      <AccordionItem title="Second item">
        Nunc id cursus metus aliquam eleifend mi in nulla posuere. Tempor id eu nisl nunc
        mi. Non curabitur gravida arcu ac. Viverra nam libero justo laoreet sit amet
        cursus.
      </AccordionItem>
      <AccordionItem title="Third item">
        Morbi non arcu risus quis varius quam quisque id. Diam maecenas sed enim ut. Duis
        convallis convallis tellus id interdum.
      </AccordionItem>
    </Accordion>
  </Hst.Variant>

  <Hst.Variant
    title="With disabled item"
    source={multiItemsSource(false, true)}
  >
    <Accordion>
      <AccordionItem title="First item">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </AccordionItem>
      <AccordionItem title="Second item">
        Nunc id cursus metus aliquam eleifend mi in nulla posuere. Tempor id eu nisl nunc
        mi. Non curabitur gravida arcu ac. Viverra nam libero justo laoreet sit amet
        cursus.
      </AccordionItem>
      <AccordionItem
        title="Third item (disabled)"
        disabled
      >
        Morbi non arcu risus quis varius quam quisque id. Diam maecenas sed enim ut. Duis
        convallis convallis tellus id interdum.
      </AccordionItem>
    </Accordion>
  </Hst.Variant>
</ThemeStory>
