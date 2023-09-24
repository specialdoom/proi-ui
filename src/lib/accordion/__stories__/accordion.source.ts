const template = `<script>
  import Accordion from "@specialdoom/proi-ui/Accordion.svelte";
  import AccordionItem from "@specialdoom/proi-ui/AccordionItem.svelte";
</script>`;

export const multiItemsSource = (
  expanded: boolean = false,
  disabled: boolean = false
) => `${template}

<Accordion>
  <AccordionItem title="First item" ${expanded ? "expanded" : ""}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
  </AccordionItem>
  <AccordionItem title="Second item">
    Nunc id cursus metus aliquam eleifend mi in nulla posuere. Tempor id eu nisl nunc
    mi. Non curabitur gravida arcu ac. Viverra nam libero justo laoreet sit amet
    cursus.
  </AccordionItem>
  <AccordionItem title="Third item ${disabled ? "(disabled)" : ""}" ${
  disabled ? "disabled" : ""
}>
    Morbi non arcu risus quis varius quam quisque id. Diam maecenas sed enim ut. Duis
    convallis convallis tellus id interdum.
  </AccordionItem>
</Accordion>
`;

export const singleItemSource = `${template}

<Accordion>
  <AccordionItem title="First item">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
  </AccordionItem>
</Accordion>
`;
