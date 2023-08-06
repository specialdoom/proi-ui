<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import IconButton from "../button/IconButton.svelte";
  import CloseIcon from "../icons/CloseIcon.svelte";
  import type { CardVariant } from "./card.types.js";

  export let title: string;
  export let description: string;
  export let variant: CardVariant = "pine";
  export let closable: boolean = false;

  let closed: boolean = false;

  const dispatch = createEventDispatcher();

  function onClose() {
    closed = true;

    dispatch("close");
  }
</script>

{#if !closed}
  <div class="proi-card {variant}">
    {#if title}
      <h2
        class="proi-card-title"
        style:justify-content={closable ? "space-between" : "flex-start"}
      >
        {title}
        {#if closable}
          <IconButton
            icon={CloseIcon}
            variant="ghost"
            on:click={onClose}
          />
        {/if}
      </h2>
    {/if}
    {#if description}
      <div class="proi-card-description">{description}</div>
    {/if}
  </div>
{/if}

<style>
  .proi-card {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width: 250px;
    gap: 8px;
  }

  .proi-card-title {
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    margin: 0;
    padding-bottom: 8px;
  }

  .proi-card-description {
    font-size: 12px;
  }

  .pine {
    background: var(--pi-pine, #479a89);
    color: var(--pi-text-on-color-inverse, #000000);
  }

  .flame {
    background: var(--pi-flame, #e35226);
    color: var(--pi-text-on-color-inverse, #000000);
  }

  .neutral {
    background: var(--pi-neutral, #000000);
    color: var(--pi-text-inverse, #ffffff);
    border: var(--pi-border-inverse, #000000);
  }

  .mikado {
    background: var(--pi-mikado, #ffc71f);
    color: var(--pi-text-on-color, #000000);
  }

  .tufts {
    background: var(--pi-tufts, #1a6fb6);
    color: var(--pi-text-on-color-inverse, #000000);
  }

  .vivid {
    background: var(--pi-vivid, #873591);
    color: var(--pi-text-on-color-inverse, #000000);
  }

  .bright {
    background: var(--pi-bg, #ffffff);
    color: var(--pi-text, #000000);
    border: 2px solid var(--pi-border-inverse, #000000);
  }

  .bright :global(.proi-icon-button svg path),
  .mikado :global(.proi-icon-button svg path) {
    stroke: var(--pi-icon-inverse, #000000);
  }
</style>
