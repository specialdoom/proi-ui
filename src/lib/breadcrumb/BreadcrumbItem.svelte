<script lang="ts">
  export let href: string;
  export let text: string;
  export let isCurrent: boolean = false;
</script>

<li
  class="proi-breadcrumb-item"
  class:current={isCurrent}
>
  <a {href}>{text}</a>
</li>

<style>
  .proi-breadcrumb-item {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 8px;
  }

  .proi-breadcrumb-item.current a,
  .proi-breadcrumb-item.current a:hover {
    color: var(--n800);
    text-decoration: none;
  }

  .proi-breadcrumb-item.current a:hover {
    text-decoration: none;
  }

  .proi-breadcrumb-item a {
    white-space: nowrap;
    color: var(--b600);
    text-decoration: none;
  }

  .proi-breadcrumb-item::after {
    margin-left: 8px;
    color: var(--n400);
    content: "/";
  }

  .proi-breadcrumb-item a {
    color: var(--b600);
  }

  .proi-breadcrumb-item a:hover {
    color: var(--b800);
    text-decoration: underline;
  }
</style>
