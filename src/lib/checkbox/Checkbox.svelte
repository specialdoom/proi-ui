<script lang="ts">
  import CheckboxCheckmarkIcon from "../icons/CheckboxCheckmarkIcon.svelte";

  export let checked: boolean = false;
  export let disabled: boolean = false;
  export let className: string = "";
</script>

<label class="proi-checkbox-container {className}">
  <input type="checkbox" bind:checked {disabled} />
  <div class="proi-checkbox-wrapper">
    <div
      class:checked
      class:disabled
      class="proi-checkbox"
      data-testid="proi-checkbox"
    >
      {#if checked}
        <CheckboxCheckmarkIcon />
      {/if}
    </div>
    <span class="proi-checkbox-label" data-testid="proi-checkbox-label">
      <slot />
    </span>
  </div>
</label>

<style>
  @import "./checkbox.css";
</style>
