<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { logEvent } from "histoire/client";
  import Card from "../Card.svelte";
  import {
    defaultSource,
    onActionEvent,
    withAction,
    withCancelAction,
    withCustomActionLabel,
    withImage,
    withLongerTitle,
    onCancelEvent
  } from "./card.source.js";

  export let Hst: HstType;
</script>

<Hst.Story title="Cards/Card">
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
    />
  </Hst.Variant>
  <Hst.Variant
    title="With longer title"
    source={withLongerTitle}
  >
    <Card
      title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      description="Supporting description for the card goes here like a breeze."
    />
  </Hst.Variant>

  <Hst.Variant
    title="With image"
    source={withImage}
  >
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      imageSrc="https://www.wallart.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/m/a/marble_1.jpg"
    />
  </Hst.Variant>

  <Hst.Variant
    title="With action"
    source={withAction}
  >
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      showAction
    />
  </Hst.Variant>

  <Hst.Variant
    title="With custom action label"
    source={withCustomActionLabel}
  >
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      showAction
      actionLabel="Custom action"
    />
  </Hst.Variant>

  <Hst.Variant
    title="With cancel action"
    source={withCancelAction}
  >
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      showAction
      showCancelAction
    />
  </Hst.Variant>
  <Hst.Variant
    title="on:action event"
    source={onActionEvent}
  >
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      showAction
      on:action={(e) => logEvent("action", e)}
    />
  </Hst.Variant>

  <Hst.Variant
    title="on:cancel event"
    source={onCancelEvent}
  >
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      showAction
      showCancelAction
      on:cancel={(e) => logEvent("cancel", e)}
    />
  </Hst.Variant>
</Hst.Story>
