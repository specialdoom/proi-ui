<script lang="ts">
  import type { TagVariant } from "./tags.types.js";
  import Tag from "./Tag.svelte";

  export let variant: TagVariant = "pine";
</script>

<Tag
  {variant}
  badge><slot /></Tag
>
