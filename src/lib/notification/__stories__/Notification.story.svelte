<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import ThemeStory from "../../../__stories__/ThemeStory.svelte";
  import { feedbackVariants } from "../../utils/variants.js";
  import { capitalizeFirstLetter } from "../../utils/string.js";
  import Notification from "../Notification.svelte";
  import {
    defaultSource,
    getVariantSource,
    withDescriptionSource
  } from "./notification.source.js";

  export let Hst: HstType;
</script>

<ThemeStory
  {Hst}
  title="Notification"
  layout={{ type: "grid", width: "50%" }}
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Notification title="Default" />
  </Hst.Variant>

  <Hst.Variant
    title="With description"
    source={withDescriptionSource}
  >
    <Notification
      title="With description"
      description="Description"
    />
  </Hst.Variant>

  {#each feedbackVariants as variant}
    {@const title = capitalizeFirstLetter(variant)}
    <Hst.Variant
      title="{title} Notification"
      source={getVariantSource(variant)}
    >
      <Notification
        {variant}
        {title}
      />
    </Hst.Variant>
  {/each}
</ThemeStory>
