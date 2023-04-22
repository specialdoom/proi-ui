<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Button from "../button/Button.svelte";
  import IconButton from "../button/IconButton.svelte";
  import CloseIcon from "../icons/CloseIcon.svelte";

  export let title: string;
  export let description: string;
  export let imageSrc: string = "";
  export let imageDescription: string = "Card image";
  export let showAction: boolean = false;
  export let actionLabel: string = "Action";
  export let showCancelAction: boolean = false;

  const dispatch = createEventDispatcher();

  function handleActionButtonClick() {
    dispatch("action");
  }

  function handleCancelActionClick() {
    dispatch("cancel");
  }
</script>

<div class="proi-card">
  {#if imageSrc}
    <div
      class="proi-card-image"
      style:background-image="url({imageSrc})"
      title={imageDescription}
    />
  {/if}
  {#if title}
    <h2 class="proi-card-title">{title}</h2>
  {/if}
  {#if description}
    <div class="proi-card-description">{description}</div>
  {/if}
  {#if showAction}
    <div class="proi-card-actions">
      <Button
        block
        on:click={handleActionButtonClick}
      >
        {actionLabel}
      </Button>
      {#if showCancelAction}
        <IconButton
          variant="danger"
          icon={CloseIcon}
          on:click={handleCancelActionClick}
        />
      {/if}
    </div>
  {/if}
</div>

<style>
  .proi-card {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background: var(--bright);
    width: 250px;
    gap: 8px;
  }

  .proi-card-title {
    font-size: 16px;
    margin: 0;
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
    margin-top: 4px;
    display: flex;
    gap: 4px;
  }
</style>
