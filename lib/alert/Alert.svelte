<script lang="ts">
  import type { AlertVariant } from "./alert.types.js";
  import CloseIcon from "../icons/CloseIcon.svelte";
  import { getFeedbackIcon } from "../utils/icons.js";
  import { createEventDispatcher } from "svelte";

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
  <div
    class="proi-alert-container {variant}"
    data-testid="proi-alert"
  >
    <div class="proi-alert">
      <div class="proi-alert-icon">
        <svelte:component this={getFeedbackIcon({ variant })} />
      </div>
      <div
        class="proi-alert-title"
        data-testid="proi-alert-title"
      >
        {title}
      </div>
      {#if closable}
        <div
          class="proi-alert-close-icon"
          on:click={close}
          on:keyup
          on:keydown
          on:keypress
        >
          <CloseIcon />
        </div>
      {/if}
    </div>
    {#if $$slots.default}
      <div
        class="proi-alert-description"
        data-testid="proi-alert-description"
      >
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

  .proi-alert-description {
    color: var(--n800);
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
    background: var(--g0);
    color: var(--g800);
  }

  .error {
    background: var(--r0);
    color: var(--r800);
  }

  .info {
    background: var(--b0);
    color: var(--b800);
  }

  .warning {
    background: var(--y0);
    color: var(--y800);
  }

  .proi-alert-close-icon:hover {
    opacity: 1;
  }
</style>
