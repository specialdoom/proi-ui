<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { logEvent } from "histoire/client";
  import Card from "../Card.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="Card">
  <Hst.Variant title="Default">
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
    />

    <Card
      title="On actions"
      description="Supporting description for the card goes here like a breeze."
      showAction
      showCancelAction
      on:action={(e) => logEvent("action triggered", e)}
      on:cancel={(e) => logEvent("cancel triggered", e)}
    />

    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      showAction
    />

    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      imageSrc="https://www.wallart.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/m/a/marble_1.jpg"
    />

    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      imageSrc="https://www.wallart.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/m/a/marble_1.jpg"
      showAction
      actionLabel="Get marble"
    />

    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      imageSrc="https://www.wallart.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/m/a/marble_1.jpg"
      showAction
      showCancelAction
      actionLabel="Get marble"
    />
  </Hst.Variant>
</Hst.Story>
