<script lang="ts">
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import {
    designTokens,
    backgroundTokens,
    borderTokens,
    textTokens,
    feedbackTokens,
    focusTokens,
    colorTokens,
    iconTokens,
    linkTokens
  } from "./constants/tokens";
  import Color from "./components/Color.svelte";
  import TokensContainer from "./components/TokensContainer.svelte";
  import ThemeStory from "./ThemeStory.svelte";

  export let Hst: HstType;
</script>

<ThemeStory
  {Hst}
  title="Tokens preview"
  group="b"
  autoPropsDisabled
>
  <TokensContainer label="Color pallete">
    {#each Object.keys(designTokens) as token}
      {@const { value: color } = designTokens[token]}
      <Color
        {color}
        title="--{token}"
        toCopy="var(--{token})"
      />
    {/each}
  </TokensContainer>
  <TokensContainer label="Background tokens">
    {#each Object.keys(backgroundTokens) as token}
      {@const { value: color } = backgroundTokens[token]}
      <Color
        {color}
        title="--{token}"
        toCopy="var(--{token})"
      />
    {/each}
  </TokensContainer>

  <TokensContainer label="Border tokens">
    {#each Object.keys(borderTokens) as token}
      {@const { value: color } = borderTokens[token]}
      <Color
        {color}
        title="--{token}"
        toCopy="var(--{token})"
      />
    {/each}
  </TokensContainer>

  <TokensContainer label="Text tokens">
    {#each Object.keys(textTokens) as token}
      {@const { value: color } = textTokens[token]}
      <Color
        {color}
        title="--{token}"
        toCopy="var(--{token})"
      />
    {/each}
  </TokensContainer>

  <TokensContainer label="Feedback tokens">
    {#each Object.keys(feedbackTokens) as token}
      {@const { value: color } = feedbackTokens[token]}
      <Color
        {color}
        title="--{token}"
        toCopy="var(--{token})"
      />
    {/each}
  </TokensContainer>

  <TokensContainer label="Focus tokens">
    {#each Object.keys(focusTokens) as token}
      {@const { value: color } = focusTokens[token]}
      <Color
        {color}
        title="--{token}"
        toCopy="var(--{token})"
      />
    {/each}
  </TokensContainer>

  <TokensContainer label="Color tokens">
    {#each Object.keys(colorTokens) as token}
      {@const { value: color } = colorTokens[token]}
      <Color
        {color}
        title="--{token}"
        toCopy="var(--{token})"
      />
    {/each}
  </TokensContainer>

  <TokensContainer label="Icon tokens">
    {#each Object.keys(iconTokens) as token}
      {@const { value: color } = iconTokens[token]}
      <Color
        {color}
        title="--{token}"
        toCopy="var(--{token})"
      />
    {/each}
  </TokensContainer>

  <TokensContainer label="Link tokens">
    {#each Object.keys(linkTokens) as token}
      {@const { value: color } = linkTokens[token]}
      <Color
        {color}
        title="--{token}"
        toCopy="var(--{token})"
      />
    {/each}
  </TokensContainer>
</ThemeStory>
