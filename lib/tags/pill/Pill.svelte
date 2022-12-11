<script lang="ts">
  import type { TagVariant } from "../tags.types.js";
  import Tag from "../Tag.svelte";

  export let variant: TagVariant = "pine";
  export let label: string = "";
</script>

<Tag
  {variant}
  pill
  {label}
/>
