<script lang="ts">
</script>

<ul
  class:proi-accordion={true}
  {...$$restProps}
>
  <slot />
</ul>

<style>
  .proi-accordion {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
