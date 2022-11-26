<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Textarea from "./Textarea.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="Textarea">
  <Hst.Variant title="Default">
    <Textarea />
  </Hst.Variant>

  <Hst.Variant title="Disabled">
    <Textarea disabled />
  </Hst.Variant>

  <Hst.Variant title="Error state">
    <Textarea error />
  </Hst.Variant>

  <Hst.Variant title="With placeholder">
    <Textarea placeholder="Placeholder" />
  </Hst.Variant>

  <Hst.Variant title="With value">
    <Textarea value="Some value" />
  </Hst.Variant>

  <Hst.Variant title="Disabled with value">
    <Textarea
      value="Some value"
      disabled
    />
  </Hst.Variant>

  <Hst.Variant title="on:keydown event">
    <Textarea
      value="Some value"
      on:keydown={(e) => {
        if (e.key === "Enter") {
          alert("Enter is pressed!");
        }
      }}
    />
  </Hst.Variant>
</Hst.Story>
