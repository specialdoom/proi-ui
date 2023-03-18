<script lang="ts">
  import ArrowRight from "../icons/ArrowRight.svelte";

  export let title: string;
  export let open: boolean = false;
  export let disabled: boolean = false;

  function handleClick() {
    open = !open;
  }
</script>

<li
  class:proi-accordion-item={true}
  class:proi-accordion-item-active={open}
  class:proi-accordion-item-disabled={disabled}
>
  <button
    class:proi-accordion-control={true}
    {disabled}
    on:click={handleClick}
  >
    {title}
    <ArrowRight />
  </button>
  <div class:proi-accordion-content={true}>
    <slot />
  </div>
</li>

<style>
  .proi-accordion-item {
    display: list-item;
    overflow: visible;
    border-top: 1px solid var(--g0);
  }

  .proi-accordion-item:last-child {
    border-bottom: 1px solid var(--g0);
  }

  .proi-accordion-item-disabled {
    border-top: 1px solid var(--n0);
  }

  .proi-accordion-item-disabled:last-child {
    border-bottom: 1px solid var(--n0);
  }

  .proi-accordion-control {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 6px 12px;
    background: transparent;
    color: var(--n800);
    margin: 0;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);
  }

  .proi-accordion-control:hover {
    background: var(--g0);
  }

  .proi-accordion-control:focus {
    outline: 2px solid var(--g800);
  }

  .proi-accordion-control :global(svg) {
    transition: all 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);
    transform: rotate(-90deg);
  }

  .proi-accordion-content {
    font-size: 14px;
    display: none;
    padding: 6px 12px 20px;
    color: var(--n800);
    display: none;
  }

  .proi-accordion-item-active .proi-accordion-content {
    display: block;
  }

  .proi-accordion-item-active .proi-accordion-control :global(svg) {
    transform: rotate(90deg);
  }
</style>
