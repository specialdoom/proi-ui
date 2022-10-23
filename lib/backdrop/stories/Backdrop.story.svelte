<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import Backdrop from "../Backdrop.svelte";
  import { logEvent } from "histoire/client";
  import * as source from "./backdrop.source.js";

  const {defaultSource, onClickSource} = source;

  export let Hst: Hst;
</script>

<Hst.Story title="Backdrop">
  <Hst.Variant title="Default" source={defaultSource}>
    <Backdrop visible={true}>Backdrop content</Backdrop>
  </Hst.Variant>

  <Hst.Variant title="on:click" source={onClickSource}>
    <Backdrop visible={true} on:click={event => logEvent("Click", event)} >Backdrop content</Backdrop>
  </Hst.Variant>
</Hst.Story>
