<script lang="ts">
  import type { TagVariant } from "./tags.types.js";

  export let variant: TagVariant = "pine";
</script>

<span class="proi-pill tag {variant}"><slot /></span>

<style>
  @import "../shared/css/data-display-variants.css";
  @import "./tag.css";

  .proi-pill {
    border-radius: 30px;
  }
</style>
