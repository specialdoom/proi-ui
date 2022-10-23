<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import Dropdown from "./Dropdown.svelte";
  import type { DropdownOption } from "./dropdown.types.js";

  export let Hst: Hst;

  let options: DropdownOption[] = [
    { label: "🍎", value: "🍎" },
    { label: "🥭", value: "🥭" },
  ];
</script>

<Hst.Story title="Dropdown">
  <Hst.Variant title="Default">
    <Dropdown placeholder="Choose option" {options} />
  </Hst.Variant>

  <Hst.Variant title="Disabled">
    <Dropdown placeholder="Choose option" {options} disabled />
  </Hst.Variant>

  <Hst.Variant title="Disabled with selected option">
    <Dropdown placeholder="Choose option" {options} disabled value="🍎" />
  </Hst.Variant>

  <Hst.Variant title="Error state">
    <Dropdown placeholder="Choose option" {options} error value="🍎" />
  </Hst.Variant>
</Hst.Story>
