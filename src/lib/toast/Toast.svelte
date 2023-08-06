<script lang="ts">
  import type { ToastVariant } from "./toast.types.js";
  import CloseIcon from "../icons/CloseIcon.svelte";
  import { feedbackIconsMap } from "../utils/icons.js";
  import IconButton from "../button/IconButton.svelte";

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
      <IconButton
        icon={CloseIcon}
        variant="ghost"
        on:click={close}
        on:click
        on:keydown
        on:keyup
        on:keypress
      />
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
    border-left: 4px solid var(--pi-success, #d5ece7);
    background: var(--pi-bg-static, #000000);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
    color: var(--pi-text-on-color, #000000);
  }

  .proi-toast {
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
  }

  :global(.proi-toast .proi-icon-button) {
    margin-left: auto;
  }

  .proi-toast-description {
    color: var(--pi-text-helper, #5c5c5c);
  }

  .proi-toast-title {
    line-height: 20px;
    font-size: 16px;
  }

  .proi-toast-icon {
    display: flex;
    align-items: center;
  }

  .success {
    border-color: var(--pi-success-02, #357266);
  }

  .error {
    border-color: var(--pi-error-02, #b53c17);
  }

  .info {
    border-color: var(--pi-info-02, #1a6fb6);
  }

  .warning {
    border-color: var(--pi-warning-02, #cd9400);
  }
</style>
