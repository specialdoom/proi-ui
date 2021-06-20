<script>
  import { Icon } from 'proi-ui-icons';
  import { icons } from './icons';

  export let type = 'success';
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
  <div class="sd-alert {outlinedClass}">
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
    padding: 6px 16px;
    font-size: 16px;
    border-radius: 50px;
    font-weight: 100;
    line-height: 1;
    border-radius: 4px;
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
    opacity: 0.9;
    align-items: center;
    font-size: 22px;
    margin-right: 12px;
    fill: #007f50;
  }

  .sd-alert-outlined {
    background: transparent;
  }

  .sd-alert-success {
    background: #9eecba;
    border: 1px solid #007f50;
  }

  .sd-alert-outlined-success {
    border: 1px solid #007f50;
  }

  .sd-alert-error {
    background: #f3737c;
    color: white;
    border: 1px solid #ee3d48;
  }

  .sd-alert-outlined-error {
    color: black;
    border: 1px solid #ee3d48;
  }

  .sd-alert-info {
    background: #79aaf3;
    border: 1px solid #257dff;
  }

  .sd-alert-outlined-info {
    border: 1px solid #257dff;
  }

  .sd-alert-warning {
    background: #fadc8d;
    border: 1px solid #fdb300;
  }

  .sd-alert-outlined-warning {
    border: 1px solid #fdb300;
  }

  .sd-alert-close-icon:hover {
    opacity: 1;
  }
</style>
