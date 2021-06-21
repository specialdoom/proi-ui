<script>
  import { onMount } from 'svelte';
  import { inputTypes } from './types';

  export let type = 'text';
  export let placeholder = '';
  export let value = '';
  export let label = '';
  export let error = '';
  export let disabled = false;

  let element;

  onMount(() => {
    if (!inputTypes.includes(type)) type = 'text';
    element.type = type;
  });
</script>

<div class="sd-input-container">
  <span class="sd-label" class:sd-label-error={error}>{label}</span>
  <input
    {placeholder}
    bind:value
    class="sd-input"
    class:sd-input-error={error}
    on:change
    bind:this={element}
    {disabled}
  />
  <div class="sd-error">{error}</div>
</div>

<style>
  .sd-input {
    border: 1px solid grey;
    border-radius: 4px;
    width: 100%;
    height: 30px;
    font-size: 13px;
    margin: 0;
    padding: 0 0 0 15px;
    box-sizing: border-box;
    outline: none;
    caret-color: grey;
  }

  .sd-input:disabled {
    border: 0.5px dashed;
    cursor: not-allowed;
  }

  .sd-input-error {
    border-color: #ff6a61;
    color: #ff6a61;
  }

  .sd-error {
    color: #ff6a61;
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    margin: 7px 0 0;
  }

  .sd-label {
    display: block;
    margin: 5px;
    font-weight: 100;
  }

  .sd-label-error {
    color: #ff6a61;
  }

  .sd-input-container {
    width: 100%;
    transition: all ease 0.5s;
  }
</style>
