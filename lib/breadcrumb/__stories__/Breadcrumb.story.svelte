<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Breadcrumb from "../Breadcrumb.svelte";
  import BreadcrumbItem from "../BreadcrumbItem.svelte";

  export let Hst: HstType;
</script>

<Hst.Story title="Breadcrumb">
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
</Hst.Story>
