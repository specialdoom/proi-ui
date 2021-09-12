<script>
  import { Icon } from "proi-ui-icons";
  import { icons } from "./icons";

  export let className = null;
  export let type = "success";
  export let closable = false;
  export let outlined = false;

  let closed = false;
  const outlinedClass = outlined
    ? `sd-alert-outlined sd-alert-outlined-${type}`
    : `sd-alert-${type}`;

  $: icon = icons.filter((item) => item.type == type)[0];

  const close = () => {
    closed = true;
  };
</script>

{#if !closed}
  <div class="sd-alert {outlinedClass} {className}">
    <div class="sd-alert-icon">
      <Icon type={icon.iconType} color={icon.color} scale="15" />
    </div>
    <div class="sd-alert-text">
      <slot>Default text</slot>
    </div>

    {#if closable}
      <div class="sd-alert-close-icon" on:click={close}>
        <Icon type="circleClose" scale="15" />
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
