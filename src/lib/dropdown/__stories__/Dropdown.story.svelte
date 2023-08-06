<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Button from "../../button/Button.svelte";
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
  import ThemeStory from "../../../__stories__/ThemeStory.svelte";

  export let Hst: HstType;

  let options: DropdownOption[] = [
    { label: "🍎", value: "🍎" },
    { label: "🥭", value: "🥭" }
  ];

  let open: boolean = false;
  let option = { label: "", value: "" };

  function handleOptionAdd() {
    options = [...options, { ...option }];
    option = { label: "", value: "" };
  }
</script>

<ThemeStory
  {Hst}
  title="Dropdown"
>
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

  <Hst.Variant title="Playground">
    <Dropdown
      placeholder="Choose option"
      bind:open
      {options}
    />

    <svelte:fragment slot="controls">
      <Hst.Text
        title="Value"
        bind:value={option.value}
      />
      <Hst.Text
        title="Label"
        bind:value={option.label}
      />
      <Button on:click={handleOptionAdd}>Add option</Button>
      <Hst.Checkbox
        bind:value={open}
        title="Is open?"
      />
    </svelte:fragment>
  </Hst.Variant>
</ThemeStory>
