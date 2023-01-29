<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Button from "../../button/Button.svelte";
  import Breadcrumb from "../Breadcrumb.svelte";
  import BreadcrumbItem from "../BreadcrumbItem.svelte";

  export let Hst: HstType;

  let breadcrumbItems: { href: string; text: string; isCurrent: boolean }[] = [];

  let href: string = "";
  let text: string = "";
  let isCurrent: boolean = false;

  function handleBreadcrumbAdd() {
    breadcrumbItems = [...breadcrumbItems, { href, text, isCurrent }];
    href = "";
    text = "";
    isCurrent = false;
  }
</script>

<Hst.Story
  title="Breadcrumb"
  layout={{ type: "grid", width: "100%" }}
>
  <Hst.Variant title="Default">
    <Breadcrumb>
      <BreadcrumbItem
        href="#item1"
        text="Item1"
      />
      <BreadcrumbItem
        href="#item2"
        text="Item2"
      />
      <BreadcrumbItem
        href="#item3"
        text="Item3"
        isCurrent
      />
    </Breadcrumb>

    <div
      id="item1"
      style:height="300px"
    >
      Item 1
    </div>
    <div
      id="item2"
      style:height="300px"
    >
      Item 2
    </div>
    <div
      id="item3"
      style:height="300px"
    >
      Item 3
    </div>
  </Hst.Variant>

  <Hst.Variant title="Playground">
    Add your breadcrumbs using controls: <br />
    <Breadcrumb>
      {#each breadcrumbItems as breadcrumbItem}
        <BreadcrumbItem {...breadcrumbItem} />
      {/each}
    </Breadcrumb>

    <svelte:fragment slot="controls">
      <Hst.Text
        bind:value={href}
        title="Href"
      />
      <Hst.Text
        bind:value={text}
        title="Text"
      />
      <Hst.Checkbox
        title="Is current?"
        bind:value={isCurrent}
      />
      <Button on:click={handleBreadcrumbAdd}>Add breadcrumb</Button>
    </svelte:fragment>
  </Hst.Variant>
</Hst.Story>
