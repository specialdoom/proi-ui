<script lang="ts">
  import { onMount } from "svelte";
  import type { Hst as HstType } from "@histoire/plugin-svelte";
  import Theme from "../lib/theme/Theme.svelte";
  import type { ThemeType } from "../lib/theme/types.js";

  export let Hst: HstType;

  let theme: ThemeType = "light";

  onMount(() => {
    if (document.documentElement.classList.contains("htw-dark")) {
      theme = "dark";
    } else {
      theme = "light";
    }

    let observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains("htw-dark")) {
        theme = "dark";
      } else {
        theme = "light";
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
      childList: false,
      characterData: false
    });

    return () => observer.disconnect();
  });
</script>

<Theme {theme}>
  <Hst.Story {...$$restProps}>
    <svelte:fragment slot="controls">
      <slot name="controls" />
    </svelte:fragment>
    <slot />
  </Hst.Story>
</Theme>
