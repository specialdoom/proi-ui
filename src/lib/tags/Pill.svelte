<script lang="ts">
  import type { TagVariant } from "./tags.types.js";

  export let variant: TagVariant = "pine";
</script>

<span class="proi-pill tag data-display {variant}"><slot /></span>

<style>
  @import "./tag.css";
  @import "../shared/css/data-display-variants.css";

  .proi-pill {
    border-radius: 30px;
  }
</style>
