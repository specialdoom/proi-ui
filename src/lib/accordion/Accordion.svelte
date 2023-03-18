<script lang="ts">
</script>

<ul
  class:proi-accordion={true}
  {...$$restProps}
  on:click
  on:focus
  on:mouseover
  on:mouseenter
  on:mouseleave
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
