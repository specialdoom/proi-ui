<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Progress from "../Progress.svelte";
  import {
    complete,
    defaultSource,
    error,
    indeterminate,
    ongoing,
    small
  } from "./progress.source.js";
  import ThemeStory from "../../../__stories__/ThemeStory.svelte";

  export let Hst: HstType;

  let percent: number = 0;
  let hasError: boolean = false;
  let isSmall: boolean = false;
  let isIndeterminate: boolean = false;
</script>

<ThemeStory
  {Hst}
  title="Progress"
  layout={{ type: "grid", width: "100%" }}
>
  <Hst.Variant
    title="Default"
    source={defaultSource}
  >
    <Progress />
  </Hst.Variant>

  <Hst.Variant
    title="Small"
    source={small}
  >
    <Progress
      small
      percent={37}
    />
  </Hst.Variant>

  <Hst.Variant
    title="Indeterminate"
    source={indeterminate}
  >
    <Progress indeterminate />
  </Hst.Variant>

  <Hst.Variant
    title="Ongoing"
    source={ongoing}
  >
    <Progress percent={87} />
  </Hst.Variant>

  <Hst.Variant
    title="Complete"
    source={complete}
  >
    <Progress percent={100} />
  </Hst.Variant>

  <Hst.Variant
    title="Error"
    source={error}
  >
    <Progress
      percent={50}
      error
    />
  </Hst.Variant>

  <Hst.Variant title="Playground">
    <Progress
      {percent}
      small={isSmall}
      error={hasError}
      indeterminate={isIndeterminate}
    />
    <svelte:fragment slot="controls">
      <Hst.Number
        title="Percent"
        bind:value={percent}
      />
      <Hst.Checkbox
        title="Has error?"
        bind:value={hasError}
      />
      <Hst.Checkbox
        title="Is small?"
        bind:value={isSmall}
      />
      <Hst.Checkbox
        title="Is indeterminate?"
        bind:value={isIndeterminate}
      />
    </svelte:fragment>
  </Hst.Variant>
</ThemeStory>
