<script lang="ts">
  import type { AlertVariant } from "./alert.types.js";
  import CloseIcon from "../icons/CloseIcon.svelte";
  import { getFeedbackIcon } from "../utils/icons.js";
  import { createEventDispatcher } from "svelte";
  import IconButton from "../button/IconButton.svelte";

  /** Variant of alert component */
  export let variant: AlertVariant = "success";

  /** Title of alert component */
  export let title: string;

  /** Whether the alert component is closable */
  export let closable: boolean = false;

  let closed: boolean = false;

  const dispatch = createEventDispatcher();

  function close() {
    closed = true;

    dispatch("close");
  }
</script>

{#if !closed}
  <div class="proi-alert-container {variant}">
    <div class="proi-alert">
      <div class="proi-alert-icon">
        <svelte:component this={getFeedbackIcon({ variant })} />
      </div>
      <div class="proi-alert-title">
        {title}
      </div>
      {#if closable}
        <IconButton
          icon={CloseIcon}
          variant="ghost"
          on:click={close}
        />
      {/if}
    </div>
    {#if $$slots.default}
      <div class="proi-alert-description">
        <slot />
      </div>
    {/if}
  </div>
{/if}

<style>
  .proi-alert-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    padding: 14px;
    width: 100%;
  }

  .proi-alert {
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
  }

  .proi-alert :global(.proi-icon-button) {
    margin-left: auto;
  }

  .proi-alert-description {
    color: var(--pi-text-on-color, #000000);
  }

  .proi-alert-title {
    line-height: 20px;
    font-size: 14px;
  }

  .proi-alert-close-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: auto;
    opacity: 0.5;
  }

  .proi-alert-icon {
    display: flex;
    align-items: center;
  }

  .success {
    background: var(--pi-success, #d5ece7);
    color: var(--pi-success-text, #357266);
  }

  .error {
    background: var(--pi-error, #ffc1ae);
    color: var(--pi-error-text, #b53c17);
  }

  .info {
    background: var(--pi-info, #a8d0f0);
    color: var(--pi-info-text, #1a6fb6);
  }

  .warning {
    background: var(--pi-warning, #ffe699);
    color: var(--pi-warning-text, #cd9400);
  }
</style>
