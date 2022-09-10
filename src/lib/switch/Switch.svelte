<script lang="ts">
  export let checked: boolean = false;
  export let disabled: boolean = false;
</script>

<label class="proi-switch-container">
  <input type="checkbox" bind:checked {disabled} />
  <div class="proi-switch-wrapper">
    <div class:checked class:disabled class="proi-switch">
      <div class="proi-switch-bullet" />
    </div>
    <span class="proi-switch-label">
      <slot />
    </span>
  </div>
</label>

<style>
  @import "./switch.css";
</style>
