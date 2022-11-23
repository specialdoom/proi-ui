<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import TextInput from "./TextInput.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="Input/TextInput">
  <Hst.Variant title="Default">
    <TextInput />
  </Hst.Variant>

  <Hst.Variant title="Disabled">
    <TextInput disabled />
  </Hst.Variant>

  <Hst.Variant title="Error state">
    <TextInput error />
  </Hst.Variant>

  <Hst.Variant title="With placeholder">
    <TextInput placeholder="Placeholder" />
  </Hst.Variant>

  <Hst.Variant title="With value">
    <TextInput value="Some value" />
  </Hst.Variant>

  <Hst.Variant title="Disabled with value">
    <TextInput
      value="Some value"
      disabled
    />
  </Hst.Variant>

  <Hst.Variant title="on:keydown event">
    <TextInput
      value="Some value"
      on:keydown={(e) => {
        if (e.key === "Enter") {
          alert("Enter is pressed!");
        }
      }}
    />
  </Hst.Variant>
</Hst.Story>
