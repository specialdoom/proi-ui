<script lang="ts">
  import type { Slice } from "./toast.types.js";
  import CloseIcon from "../icons/CloseIcon.svelte";
  import { feedbackIconsMap } from "../utils/icons.js";

  export let toast: Slice;

  let closed: boolean = false;

  function close() {
    closed = true;
  }
</script>

{#if !closed}
  <div class="proi-toast-container {toast.variant}">
    <div class="proi-toast">
      <div class="proi-toast-icon">
        <svelte:component this={feedbackIconsMap[toast.variant]} />
      </div>
      <div class="proi-toast-text">
        {toast.title}
      </div>
      <div
        class="proi-toast-close-icon"
        on:click={close}
      >
        <CloseIcon />
      </div>
    </div>
    {#if toast?.message}
      <div class="proi-toast-description">
        {toast?.message}
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

  .proi-toast-text {
    line-height: 20px;
    font-size: 16px;
    font-weight: 300;
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
