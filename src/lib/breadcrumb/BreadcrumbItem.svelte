<script lang="ts">
  import Link from "../link/Link.svelte";

  export let href: string;
  export let text: string;
  export let isCurrent: boolean = false;
</script>

<li
  class="proi-breadcrumb-item"
  class:current={isCurrent}
  {...$$restProps}
>
  <Link
    {href}
    title={text}
    class={isCurrent ? "current" : ""}
  >
    {text}
  </Link>
</li>

<style>
  .proi-breadcrumb-item {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 8px;
  }

  .proi-breadcrumb-item.current :global(a),
  .proi-breadcrumb-item.current :global(a:hover),
  .proi-breadcrumb-item.current :global(a:visited) {
    color: var(--pi-text, #000000);
    text-decoration: none;
  }

  .proi-breadcrumb-item :global(a:visited) {
    color: var(--pi-link-text, #3993dd);
  }

  .proi-breadcrumb-item::after {
    margin-left: 8px;
    color: var(--pi-divider, #5c5c5c);
    content: "/";
  }
</style>
