<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { logEvent } from "histoire/client";
  import Card from "../Card.svelte";
  import {
    defaultSource,
    withImageSource,
    withLongerTitleSource,
    onCloseEventSource,
    closableSource,
    withActionsSlotSource
  } from "./card.source.js";
  import Button from "../../button/Button.svelte";
  import Divider from "../../divider/Divider.svelte";
  import Link from "../../link/Link.svelte";
  import ThemeStory from "../../histoire/ThemeStory.svelte";

  export let Hst: HstType;

  let title: string = "Title";
  let description: string = "Description";
  let imageSrc: string = "";
  let imageDescription: string = "";
  let closable: boolean = false;
</script>

<ThemeStory
  {Hst}
  title="Cards/Card"
  layout={{ type: "grid", width: "90%" }}
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
      {closable}
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
        title="Closable"
        bind:value={closable}
      />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant
    title="With longer title"
    source={withLongerTitleSource}
  >
    <Card
      title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      description="Supporting description for the card goes here like a breeze."
    />
  </Hst.Variant>

  <Hst.Variant
    title="With image"
    source={withImageSource}
  >
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      imageSrc="https://www.wallart.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/m/a/marble_1.jpg"
    />
  </Hst.Variant>

  <Hst.Variant
    title="Closable"
    source={closableSource}
  >
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      closable
    />
  </Hst.Variant>

  <Hst.Variant
    title="With slot: actions"
    source={withActionsSlotSource}
  >
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      closable
    >
      <svelte:fragment slot="actions">
        <Link
          href="#"
          title="link"
        >
          First
        </Link>
        <Divider />
        <Link
          href="#"
          title="link"
        >
          Second
        </Link>
      </svelte:fragment>
    </Card>
    <br />
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      closable
    >
      <svelte:fragment slot="actions">
        <Button variant="ghost">🧪</Button>
        <Divider />
        <Button variant="ghost">📦</Button>
        <Divider />
        <Button variant="ghost">🧬</Button>
      </svelte:fragment>
    </Card>
  </Hst.Variant>

  <Hst.Variant
    title="on:close event"
    source={onCloseEventSource}
  >
    <Card
      title="Title"
      description="Supporting description for the card goes here like a breeze."
      closable
      on:close={(e) => logEvent("cancel", e)}
    />
  </Hst.Variant>
</ThemeStory>
