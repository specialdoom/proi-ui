<script>
  import { step } from "./store";

  export let stepsDetails = [];

  const setStep = (index) => {
    if ($step !== index) $step = index;
  };
</script>

<div class="steps">
  {#each stepsDetails as detail, index}
    <div class="step center">
      <div
        class="step-number center"
        class:current={$step === index}
        on:click={() => setStep(index)}
      >
        {index + 1}
      </div>
      <div>{detail.title}</div>
    </div>
  {/each}
</div>
<div class="slot">
  <slot />
</div>

<style>
  .steps {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    min-width: 200px;
  }

  .slot {
    padding: 10px 20px;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .step {
    flex-direction: column;
  }

  .step-number {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid var(--g400);
  }

  .step-number.current,
  .step-number:hover {
    background: var(--g400);
    color: var(--n0);
    cursor: pointer;
  }
</style>
