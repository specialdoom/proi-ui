<script lang="ts">
  export let href: string;
  export let title: string;
</script>

<a
  class:proi-link={true}
  {href}
  {title}
  {...$$restProps}
  on:click
  on:focus
  on:mouseover
  on:mouseenter
  on:mouseleave
>
  <slot />
</a>

<style>
  .proi-link {
    white-space: nowrap;
    color: var(--b600);
    text-decoration: none;
  }

  .proi-link:focus {
    outline: 2px solid var(--b800);
  }

  .proi-link:active {
    color: var(--n600);
  }

  .proi-link:visited {
    color: var(--p600);
  }

  .proi-link:hover {
    color: var(--b800);
    text-decoration: underline;
  }
</style>
