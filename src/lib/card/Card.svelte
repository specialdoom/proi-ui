<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import IconButton from "../button/IconButton.svelte";
  import CloseIcon from "../icons/CloseIcon.svelte";

  export let title: string;
  export let description: string;
  export let imageSrc: string = "";
  export let imageDescription: string = "Card image";
  export let closable: boolean = false;

  let closed: boolean = false;

  const dispatch = createEventDispatcher();

  function onClose() {
    closed = true;
    dispatch("close");
  }
</script>

{#if !closed}
  <div class="proi-card">
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
    {#if imageSrc}
      <div
        class="proi-card-image"
        style:background-image="url({imageSrc})"
        title={imageDescription}
      />
    {/if}
    {#if description}
      <div class="proi-card-description">{description}</div>
    {/if}
    {#if $$slots.actions}
      <div class="proi-card-actions">
        <slot name="actions" />
      </div>
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
    background: var(--pi-bg-static);
    color: var(--pi-text-on-color);
    width: 250px;
    gap: 8px;
  }

  .proi-card-title {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    margin: 0;
    padding-bottom: 8px;
  }

  .proi-card-image {
    width: 100%;
    border-radius: 4px;
    height: 150px;
    background-size: cover;
  }

  .proi-card-description {
    font-size: 12px;
  }

  .proi-card-actions {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 4px;
  }

  /* Close button */
  .proi-card-title :global(.proi-icon-button) {
    position: absolute;
    right: 0;
    top: 2px;
  }
</style>
