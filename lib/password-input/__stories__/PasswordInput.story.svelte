<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import PasswordInput from "../PasswordInput.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="Inputs/PasswordInput">
  <Hst.Variant title="Default">
    <PasswordInput placeholder="placeholder" />
    <PasswordInput
      placeholder="placeholder"
      disabled
    />
    <PasswordInput
      placeholder="placeholder"
      error
    />
  </Hst.Variant>
</Hst.Story>
