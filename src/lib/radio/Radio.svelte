<script lang="ts">
  import CircleIcon from "../icons/CircleIcon.svelte";

  export let value: number;
  export let disabled: boolean = false;
  export let group: number;
</script>

<label class="proi-radio-container" class:sd-disabled={disabled}>
  <input type="radio" bind:group {value} {disabled} />
  <div class="proi-radio-bullet" class:checked={group === value} class:disabled>
    {#if group === value}
      <CircleIcon fillColor={disabled ? "#EFF1F3" : "#479A89"} />
    {/if}
  </div>
  <div class="proi-radio-label"><slot /></div>
</label>

<style>
  @import "./radio.css";
</style>
