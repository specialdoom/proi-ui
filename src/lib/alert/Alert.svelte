<script lang="ts">
  import CheckIcon from '$lib/icons/CheckIcon.svelte';
  import CloseIcon from '$lib/icons/CloseIcon.svelte';
  import InfoIcon from '$lib/icons/InfoIcon.svelte';
  import WarningIcon from '$lib/icons/WarningIcon.svelte';
  import StopIcon from '$lib/icons/StopIcon.svelte';
  import type { AlertVariant } from './alert.types.js';

  export let className: string = '';
  export let variant: AlertVariant = 'success';
  console.log(variant);
  export let closable: boolean = false;

  const icons = {
    success: CheckIcon,
    error: StopIcon,
    info: InfoIcon,
    warning: WarningIcon
  };

  let closed = false;

  const close = () => (closed = true);
</script>

{#if !closed}
  <div class="sd-alert {variant} {className}">
    <div class="sd-alert-icon">
      <svelte:component this={icons[variant]} />
    </div>
    <div class="sd-alert-text">
      <slot>Default text</slot>
    </div>
    {#if closable}
      <div class="sd-alert-close-icon" on:click={close}>
        <CloseIcon />
      </div>
    {/if}
  </div>
{/if}

<style>
  .sd-alert {
    display: flex;
    align-items: center;
    padding: 14px;
    gap: 10px;
    border-radius: 8px;
    height: 48px;
    box-sizing: border-box;
  }

  .sd-alert-text {
    line-height: 20px;
    font-size: 14px;
    font-weight: 300;
  }

  .sd-alert-close-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: auto;
    opacity: 0.5;
  }

  .sd-alert-icon {
    display: flex;
    align-items: center;
  }

  .success {
    background: var(--g200);
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

  .sd-alert-close-icon:hover {
    opacity: 1;
  }
</style>
