<script lang="ts">
  import type { TagVariant } from "./tags.types.js";

  export let variant: TagVariant = "pine";
</script>

<span class="proi-badge tag data-display {variant}"><slot /></span>

<style>
  @import "./tag.css";
  @import "../shared/css/data-display-variants.css";

  .proi-badge {
    border-radius: 4px;
  }
</style>
