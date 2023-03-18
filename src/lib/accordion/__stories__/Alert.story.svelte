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
  <Hst.Variant title="Default">
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
        title="Second item"
        disabled
      >
        Analyze text to extract meta-data from content such as concepts, entities,
        emotion, relations, sentiment and more.
      </AccordionItem>
    </Accordion>
  </Hst.Variant>
</Hst.Story>
