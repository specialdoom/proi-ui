<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Accordion from "../Accordion.svelte";
  import AccordionItem from "../AccordionItem.svelte";

  export let Hst: HstType;
</script>

<Hst.Story
  title="Accordion"
  layout={{ type: "grid", width: "100%" }}
>
  <Hst.Variant title="Multi items">
    <Accordion>
      <AccordionItem title="First item">
        Translate text, documents, and websites from one language to another. Create
        industry or region-specific translations via the service's customization
        capability.
      </AccordionItem>
      <AccordionItem title="Second item">
        Analyze text to extract meta-data from content such as concepts, entities,
        emotion, relations, sentiment and more.
      </AccordionItem>
      <AccordionItem title="Third item">
        Analyze text to extract meta-data from content such as concepts, entities,
        emotion, relations, sentiment and more.
      </AccordionItem>
    </Accordion>
  </Hst.Variant>

  <Hst.Variant title="Single item">
    <Accordion>
      <AccordionItem title="Single item">
        Translate text, documents, and websites from one language to another. Create
        industry or region-specific translations via the service's customization
        capability.
      </AccordionItem>
    </Accordion>
  </Hst.Variant>

  <Hst.Variant title="With disabled items">
    <Accordion>
      <AccordionItem title="First item">
        Translate text, documents, and websites from one language to another. Create
        industry or region-specific translations via the service's customization
        capability.
      </AccordionItem>
      <AccordionItem title="Second item">
        Analyze text to extract meta-data from content such as concepts, entities,
        emotion, relations, sentiment and more.
      </AccordionItem>
      <AccordionItem
        title="Third item (disabled)"
        disabled
      >
        Analyze text to extract meta-data from content such as concepts, entities,
        emotion, relations, sentiment and more.
      </AccordionItem>
    </Accordion>
  </Hst.Variant>
</Hst.Story>
