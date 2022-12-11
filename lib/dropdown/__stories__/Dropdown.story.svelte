<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Dropdown from "../Dropdown.svelte";
  import type { DropdownOption } from "../dropdown.types.js";
  import {
    defaultSource,
    opened,
    withPlaceholder,
    disabled,
    disabledWithSelectedOption,
    error
  } from "./dropdown.source.js";

  export let Hst: HstType;

  let options: DropdownOption[] = [
    { label: "🍎", value: "🍎" },
    { label: "🥭", value: "🥭" }
  ];
</script>

<Hst.Story title="Dropdown">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Dropdown {options} />
  </Hst.Variant>

  <Hst.Variant
    title="Opened"
    source={opened}
  >
    <Dropdown
      {options}
      open={true}
    />
  </Hst.Variant>

  <Hst.Variant
    title="With placeholder"
    source={withPlaceholder}
  >
    <Dropdown
      {options}
      placeholder="Choose option"
    />
  </Hst.Variant>

  <Hst.Variant
    title="Disabled"
    source={disabled}
  >
    <Dropdown
      placeholder="Choose option"
      {options}
      disabled
    />
  </Hst.Variant>

  <Hst.Variant
    title="Disabled with selected option"
    source={disabledWithSelectedOption}
  >
    <Dropdown
      placeholder="Choose option"
      {options}
      disabled
      value="🍎"
    />
  </Hst.Variant>

  <Hst.Variant
    title="Error state"
    source={error}
  >
    <Dropdown
      placeholder="Choose option"
      {options}
      error
      value="🍎"
    />
  </Hst.Variant>
</Hst.Story>
