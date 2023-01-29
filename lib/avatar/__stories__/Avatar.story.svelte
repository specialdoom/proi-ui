<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import { dataDisplayVariants } from "../../utils/variants.js";
  import { capitalizeFirstLetter } from "../../utils/string.js";
  import Avatar from "../index.js";

  import * as source from "./avatar.source.js";
  import type { AvatarVariant } from "../avatar.types.js";

  const { withInitialsSource, withImageSource, defaultAvatarsSource } = source;

  export let Hst: HstType;

  let initials: string = "PI";
  let image: string = "";
  let variant: AvatarVariant = "pine";
  let useImage: boolean = false;
</script>

<Hst.Story
  title="Avatar"
  layout={{ type: "grid", width: 300 }}
>
  <Hst.Variant
    title="Default"
    source={defaultAvatarsSource}
  >
    <Avatar.Lauren />
    <Avatar.Tim />
    <Avatar.Leo />
    <Avatar.Nikita />
  </Hst.Variant>

  <Hst.Variant title="Playground">
    <Avatar
      {initials}
      {image}
      {variant}
    />
    <svelte:fragment slot="controls">
      <Hst.Checkbox
        bind:value={useImage}
        title="Use image?"
      />
      {#if useImage}
        <Hst.Text
          bind:value={image}
          title="Image source"
        />
      {:else}
        <Hst.Text
          bind:value={initials}
          title="Initials"
        />

        <Hst.Select
          bind:value={variant}
          title="Variant"
          options={dataDisplayVariants.map((x) => ({ label: x, value: x }))}
        />
      {/if}
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant
    title="With initials"
    source={withInitialsSource}
  >
    <Avatar initials="PU" />
  </Hst.Variant>

  <Hst.Variant
    title="With image"
    source={withImageSource}
  >
    <Avatar image="https://avatars.githubusercontent.com/u/41910815?v=4" />
  </Hst.Variant>

  {#each dataDisplayVariants as variant}
    <Hst.Variant
      title="{capitalizeFirstLetter(variant)} Avatar"
      source={withImageSource}
    >
      <Avatar
        {variant}
        initials="PU"
      />
    </Hst.Variant>
  {/each}
</Hst.Story>
