<script>
  import { onMount } from "svelte";
  let element;

  export let type = "text";
  export let placeholder = "";
  export let value = null;
  export let squared = false;
  export let error = "";
  export let success = false;
  export let label = "Label";

  onMount(() => {
    element.type = type;
  });
</script>

<style>
  .sd-input {
    border: 1px solid grey;
    border-radius: 50px;
    width: 100%;
    padding-left: 10px;
    box-sizing: border-box;
    outline: none;
  }

  .sd-input-squared {
    border-radius: 5px;
  }

  .sd-input-error {
    border-color: #ff6a61;
    color: #ff6a61;
  }

  .sd-error {
    color: #ff6a61;
    font-size: 10px;
    position: absolute;
    bottom: -5px;
    left: 10px;
  }

  .sd-input-success {
    border-color: #35d073;
    color: #35d073;
  }

  .sd-input:focus {
    border-color: cornflowerblue;
  }

  .sd-label {
    margin: 5px;
    font-weight: 100;
  }

  .sd-input-container {
    width: 40%;
    position: relative;
    margin-bottom: 10px;
  }
</style>

<div class="sd-input-container">
  <label class="sd-label">{label}</label>
  <input
    {placeholder}
    bind:value
    class="sd-input {error ? 'sd-input-error' : ''}
    {success ? 'sd-input-success' : ''}
    {squared ? 'sd-input-squared' : ''}"
    on:change
    bind:this={element} />
  <span class="sd-error">{error}</span>
</div>
