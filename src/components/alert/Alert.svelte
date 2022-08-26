<script lang="ts">
  import { Icon } from '../../../icons/src';
  import { icons } from './icons';
  import type { AlertVariant } from './alert.types';

  export let className: string = null;
  export let variant: AlertVariant = 'success';
  export let closable: boolean = false;
  export let outlined: boolean = false;

  let closed = false;
  const outlinedClass = outlined
    ? `sd-alert-outlined sd-alert-outlined-${variant}`
    : `sd-alert-${variant}`;

  $: icon = icons.filter((item) => item.variant == variant)[0];

  const close = () => {
    closed = true;
  };variant
</script>

{#if !closed}
  <div class="sd-alert {outlinedClass} {className}">
    <div class="sd-alert-icon">
      <Icon variant={icon.iconVariant} color={icon.color} scale={15} />
    </div>
    <div class="sd-alert-text">
      <slot>Default text</slot>
    </div>

    {#if closable}iconVariant
      <div class="sd-alert-close-icon" on:click={close}>
        <Icon variant="circleClose" scale={15} />
      </div>
    {/if}
  </div>
{/if}

<style>
  .sd-alert {
    display: flex;
    align-items: center;
    padding: 6px 16px;
    font-size: 16px;
    border-radius: 50px;
    font-weight: 300;
    line-height: 1;
    border-radius: 4px;
    margin: 5px 0;
  }

  .sd-alert-text {
    padding: 8px 0;
  }

  .sd-alert-close-icon {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding-left: 16px;
    opacity: 0.5;
  }

  .sd-alert-close-text {
    cursor: pointer;
    font-weight: 400;
  }

  .sd-alert-icon {
    display: flex;
    align-items: center;
    margin-right: 12px;
  }

  .sd-alert-outlined {
    background: transparent;
  }

  .sd-alert-success {
    background: var(--sd-success);
    border: 1px solid var(--sd-success-dark);
  }

  .sd-alert-outlined-success {
    border: 1px solid var(--sd-success-dark);
  }

  .sd-alert-error {
    background: var(--sd-error);
    color: white;
    border: 1px solid var(--sd-error-dark);
  }

  .sd-alert-outlined-error {
    color: black;
    border: 1px solid var(--sd-error-dark);
  }

  .sd-alert-info {
    background: var(--sd-info);
    border: 1px solid var(--sd-info-dark);
  }

  .sd-alert-outlined-info {
    border: 1px solid var(--sd-info-dark);
  }

  .sd-alert-warning {
    background: var(--sd-warning);
    border: 1px solid var(--sd-warning-dark);
  }

  .sd-alert-outlined-warning {
    border: 1px solid var(--sd-warning-dark);
  }

  .sd-alert-close-icon:hover {
    opacity: 1;
  }
</style>
