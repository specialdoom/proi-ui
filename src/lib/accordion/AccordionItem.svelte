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
  {...$$restProps}
>
  <button
    class:proi-accordion-item-control={true}
    {disabled}
    on:click={handleClick}
  >
    {title}
    <ArrowRight />
  </button>
  {#if open}
    <div class:proi-accordion-item-content={true}>
      <slot />
    </div>
  {/if}
</li>

<style>
  .proi-accordion-item {
    display: list-item;
    overflow: visible;
    border-top: 1px solid var(--pi-border-interactive, #62aae4);
  }

  .proi-accordion-item:last-child {
    border-bottom: 1px solid var(--pi-border-interactive, #62aae4);
  }

  .proi-accordion-item-disabled {
    border-top: 1px solid var(--pi-border-disabled, #d6d6d6);
  }

  .proi-accordion-item-disabled:last-child {
    border-bottom: 1px solid var(--pi-border-disabled, #d6d6d6);
  }

  .proi-accordion-item-control {
    border: unset;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 6px 12px;
    background: var(--pi-bg, #ffffff);
    color: var(--pi-text, #000000);
    margin: 0;
    cursor: pointer;
    font-size: 14px;
  }

  .proi-accordion-item-control:hover {
    background: var(--pi-bg-hover, #d6d6d6);
  }

  .proi-accordion-item-control:focus {
    outline: 2px solid var(--pi-focus, #1a6fb6);
  }

  .proi-accordion-item-control :global(svg) {
    transition: all 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);
    transform: rotate(-90deg);
  }

  .proi-accordion-item-control :global(svg path) {
    stroke: var(--pi-icon-inverse, #000000);
  }

  .proi-accordion-item-control:disabled:hover {
    background: transparent;
  }

  .proi-accordion-item-control:disabled {
    color: var(--pi-text-disabled, #adadad);
  }

  .proi-accordion-item-control:disabled :global(svg path) {
    stroke: var(--pi-icon-disabled, #adadad);
  }

  .proi-accordion-item-content {
    font-size: 14px;
    padding: 6px 12px 20px;
    color: var(--pi-text, #000000);
  }

  .proi-accordion-item-active .proi-accordion-item-control :global(svg) {
    transform: rotate(90deg);
  }
</style>
