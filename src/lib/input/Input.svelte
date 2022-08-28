<script lang="ts">
  import { onMount } from "svelte";
  import type { InputVariant } from "./input.types.js";

  export let variant: InputVariant = "text";
  export let placeholder: string = "";
  export let value: string = "";
  export let label: string = "";
  export let error: string = "";
  export let disabled: boolean = false;
  export let className: string = "";

  let element: HTMLInputElement;

  onMount(() => {
    element.type = variant;
  });
</script>

<div class="sd-input-container {className}">
  <span class="sd-label" class:sd-label-error={error} {disabled}>
    {label}
  </span>
  <input
    {placeholder}
    bind:value
    class="sd-input"
    class:sd-input-error={error}
    on:change
    bind:this={element}
    {disabled}
  />
  {#if error}
    <div class="sd-error">{error}</div>
  {/if}
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
    color: grey;
  }

  .sd-input-error {
    border-color: var(--sd-error);
    color: var(--sd-error);
  }

  .sd-error {
    color: var(--sd-error);
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

  .sd-label:disabled {
    color: grey;
  }

  .sd-label-error {
    color: #ff6a61;
  }

  .sd-input-container {
    width: 100%;
    transition: all ease 0.5s;
  }
</style>
