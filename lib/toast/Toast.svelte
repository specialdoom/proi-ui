<script lang="ts">
  import type { ToastVariant } from "./toast.types.js";
  import CloseIcon from "../icons/CloseIcon.svelte";
  import { feedbackIconsMap } from "../utils/icons.js";

  export let variant: ToastVariant = "success";
  export let title: string;
  export let description: string = "";

  let closed: boolean = false;

  function close() {
    closed = true;
  }
</script>

{#if !closed}
  <div class="proi-toast-container {variant}">
    <div class="proi-toast">
      <div class="proi-toast-icon">
        <svelte:component this={feedbackIconsMap[variant]} />
      </div>
      <div class="proi-toast-title">
        {title}
      </div>
      <div
        class="proi-toast-close-icon"
        on:click
        on:click={close}
        on:keydown
        on:keyup
        on:keypress
      >
        <CloseIcon />
      </div>
    </div>
    {#if description}
      <div class="proi-toast-description">
        {description}
      </div>
    {/if}
  </div>
{/if}

<style>
  .proi-toast-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    margin: 12px;
    padding: 14px;
    width: 300px;
    border-left: 4px solid var(--g800);
    background: var(--bright);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  }

  .proi-toast {
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
  }

  .proi-toast-description {
    color: var(--n800);
  }

  .proi-toast-title {
    line-height: 20px;
    font-size: 16px;
  }

  .proi-toast-close-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: auto;
    opacity: 0.5;
  }

  .proi-toast-icon {
    display: flex;
    align-items: center;
  }

  .success {
    color: var(--g800);
    border-color: var(--g800);
  }

  .error {
    color: var(--r800);
    border-color: var(--r800);
  }

  .info {
    color: var(--b800);
    border-color: var(--b800);
  }

  .warning {
    color: var(--y800);
    border-color: var(--y800);
  }

  .proi-toast-close-icon:hover {
    opacity: 1;
  }
</style>
