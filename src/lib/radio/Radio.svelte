<script lang="ts">
  import CircleIcon from "$lib/icons/CircleIcon.svelte";

  export let value: number;
  export let disabled: boolean = false;
  export let group: number;
</script>

<label class="proi-radoi-container" class:sd-disabled={disabled}>
  <input type="radio" bind:group {value} {disabled} />
  <div class="proi-radio-bullet" class:checked={group === value} class:disabled>
    {#if group === value}
      <CircleIcon fillColor={disabled ? "#89959B" : "#479A89"} />
    {/if}
  </div>
  <div class="proi-radio-label"><slot /></div>
</label>

<style>
  .proi-radoi-container {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;
  }

  .proi-radoi-container input {
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
    background: var(--n0);
  }

  .proi-radio-bullet.checked {
    border: unset;
  }

  .proi-radio-bullet.disabled.checked {
    background: var(--n0);
  }

  .proi-radio-bullet.disabled {
    background: var(--n400);
    border: unset;
  }

  .proi-radio-label {
    font-size: 16px;
  }
</style>
