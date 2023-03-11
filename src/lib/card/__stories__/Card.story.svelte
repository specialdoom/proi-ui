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

  let title: string = "Title";
  let description: string = "Description";
  let imageSrc: string = "";
  let imageDescription: string = "";
  let showAction: boolean = false;
  let actionLabel: string = "Action";
  let showCancelAction: boolean = false;
</script>

<Hst.Story
  title="Cards/Card"
  layout={{ type: "grid", width: "50%" }}
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
    />
  </Hst.Variant>

  <Hst.Variant title="Playground">
    <Card
      {title}
      {description}
      {imageDescription}
      {imageSrc}
      {showAction}
      {actionLabel}
      {showCancelAction}
    />
    <svelte:fragment slot="controls">
      <Hst.Text
        bind:value={title}
        title="Title"
      />
      <Hst.Text
        bind:value={description}
        title="Description"
      />
      <Hst.Text
        bind:value={imageSrc}
        title="Image source"
      />
      <Hst.Text
        bind:value={imageDescription}
        title="Image description"
      />
      <Hst.Checkbox
        title="Show action"
        bind:value={showAction}
      />
      {#if showAction}
        <Hst.Text
          bind:value={actionLabel}
          title="Action label"
        />
        <Hst.Checkbox
          title="Show cancel action"
          bind:value={showCancelAction}
        />
      {/if}
    </svelte:fragment>
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
