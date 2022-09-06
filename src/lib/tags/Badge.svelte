<script lang="ts">
  import type { TagVariant } from "./tags.types.js";

  export let variant: TagVariant = "pine";
</script>

<span class="proi-badge tag {variant}"><slot /></span>

<style>
  @import "./tag.css";

  .proi-badge {
    border-radius: 4px;
  }
</style>
