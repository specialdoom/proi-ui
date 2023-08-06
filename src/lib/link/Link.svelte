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
    color: var(--pi-link-text, #3993dd);
    text-decoration: none;
    font-size: 14px;
  }

  .proi-link:focus {
    outline: 2px solid var(--pi-focus, #1a6fb6);
  }

  .proi-link:active {
    color: var(--pi-link-active-text, #212121);
  }

  .proi-link:visited {
    color: var(--pi-link-visited-text, #873591);
  }

  .proi-link:hover {
    text-decoration: underline;
  }
</style>
