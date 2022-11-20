<script lang="ts">
  import CircleIcon from "../icons/CircleIcon.svelte";

  export let value: number;
  export let disabled: boolean = false;
  export let group: number;
</script>

<label
  class="proi-radio-container"
  class:sd-disabled={disabled}
>
  <input
    type="radio"
    bind:group
    {value}
    {disabled}
  />
  <div
    class="proi-radio-bullet"
    class:checked={group === value}
    class:disabled
  >
    {#if group === value}
      <CircleIcon fillColor={disabled ? "#EFF1F3" : "#479A89"} />
    {/if}
  </div>
  <div class="proi-radio-label"><slot /></div>
</label>

<style>
  .proi-radio-container {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;
  }

  .proi-radio-container input {
    opacity: 0;
    height: 0;
    width: 0;
  }

  .proi-radio-bullet {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 18px;
    width: 18px;
    border-radius: 50px;
    border: 1px solid var(--n200);
    background: var(--bright);
  }

  .proi-radio-container:hover .proi-radio-bullet {
    background: var(--n0);
  }

  .proi-radio-container:hover .proi-radio-bullet.disabled {
    background: var(--n200);
  }

  .proi-radio-bullet:hover {
    background: var(--n0);
  }

  .proi-radio-bullet.disabled.checked {
    background: var(--n200);
  }

  .proi-radio-bullet.disabled {
    background: var(--n200);
    border: unset;
  }

  .proi-radio-label {
    font-size: 16px;
    line-height: 18px;
  }
</style>
