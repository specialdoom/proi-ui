<script lang="ts">
  import CheckIcon from "../icons/CheckIcon.svelte";
  import CloseIcon from "../icons/CloseIcon.svelte";
  import InfoIcon from "../icons/InfoIcon.svelte";
  import WarningIcon from "../icons/WarningIcon.svelte";
  import StopIcon from "../icons/StopIcon.svelte";
  import type { AlertVariant } from "./alert.types.js";

  export let variant: AlertVariant = "success";
  export let title: string;
  export let closable: boolean = false;

  const icons: any = {
    success: CheckIcon,
    error: StopIcon,
    info: InfoIcon,
    warning: WarningIcon,
  };

  let closed = false;

  const close = () => (closed = true);
</script>

{#if !closed}
  <div class="proi-alert-container {variant}" data-testid="proi-alert">
    <div class="proi-alert">
      <div class="proi-alert-icon">
        <svelte:component this={icons[variant]} />
      </div>
      <div class="proi-alert-title" data-testid="proi-alert-title">
        {title}
      </div>
      {#if closable}
        <div class="proi-alert-close-icon" on:click={close}>
          <CloseIcon />
        </div>
      {/if}
    </div>
    {#if $$slots.default}
      <div class="proi-alert-description" data-testid="proi-alert-description">
        <slot />
      </div>
    {/if}
  </div>
{/if}

<style>
  .proi-alert-container {
    font-family: "Iosevka Web";
    font-weight: 400;
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
