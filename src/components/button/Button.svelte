<script>
  import { onMount } from "svelte";

  const statusValues = ["primary", "info", "success", "danger", "warning"];
  let borderClass = "rounded";

  export let value = null;
  export let status = "primary";
  export let outlined = false;
  export let squared = false;
  export let disabled = false;

  onMount(() => {
    if (statusValues.indexOf(status) == -1) {
      status = "primary";
    }

    if (squared) {
      borderClass = "squared";
    }
  });
</script>

<style>
  .sd-button {
    width: 100px;
    height: 40px;
    margin: 0;
    padding: 12px 0;
    color: #fff;
    text-align: center;
    line-height: 1;
    border-radius: 30px;
    white-space: nowrap;
    font-weight: 300;
    font-size: 15px;
    border: none;
    box-sizing: border-box;
    display: inline-block;
    outline: none;
    user-select: none;
    cursor: pointer;
    transition: all 0.25s;
  }

  .sd-button-outline {
    background: #ffffff;
  }
  .sd-outline-primary {
    border: 1px solid #2398ab;
    color: #2398ab;
  }

  .sd-primary {
    background: #2398ab;
  }

  .sd-info {
    background: #5199ff;
  }
  .sd-outline-info {
    border: 1px solid #5199ff;
    color: #5199ff;
  }

  .sd-danger {
    background: #ee3d48;
  }

  .sd-outline-danger {
    border: 1px solid #ee3d48;
    color: #ee3d48;
  }

  .sd-warning {
    background: #ffc11e;
  }

  .sd-outline-warning {
    border: 1px solid #ffc11e;
    color: #ffc11e;
  }

  .sd-success {
    background: #00dc7d;
  }

  .sd-outline-success {
    border: 1px solid #00dc7d;
    color: #00dc7d;
  }

  .sd-squared {
    border-radius: 5px;
  }
</style>

<button
  class="sd-button sd-{status}
  {squared ? 'sd-squared' : ''}
  {outlined ? 'sd-button outline sd-outline' + status : ''}
  "
  {disabled}
  on:click>
  {#if !value}
    {`${status.charAt(0).toUpperCase()}${status.slice(1)}`}
  {:else}{value}{/if}
</button>
