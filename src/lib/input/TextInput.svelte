<script lang="ts">
  export let placeholder: string = "";
  export let value: string = "";
  export let error: boolean = false;
  export let disabled: boolean = false;
  export let className: string = "";
</script>

<input
  {placeholder}
  bind:value
  class="proi-input {className}"
  class:error
  on:change
  {disabled}
  type="text"
/>

<style>
  @import "./input.css";
</style>
