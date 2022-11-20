<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Button from "./Button.svelte";
  import { logEvent } from "histoire/client";

  export let Hst: HstType;
</script>

<Hst.Story title="Button">
  <Hst.Variant title="Default">
    <Button>Click me</Button>
  </Hst.Variant>

  <Hst.Variant title="Secondary button">
    <Button variant="secondary">Click me</Button>
  </Hst.Variant>

  <Hst.Variant title="Ghost button">
    <Button variant="ghost">Click me</Button>
  </Hst.Variant>

  <Hst.Variant title="Disabled button">
    <Button disabled>Click me</Button>
  </Hst.Variant>

  <Hst.Variant title="With events">
    <Button on:click={(event) => logEvent("Click", event)}>Click me</Button>
  </Hst.Variant>
</Hst.Story>
