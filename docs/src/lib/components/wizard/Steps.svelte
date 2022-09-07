<script>
  import { step } from './store';
  import { Icon } from '@specialdoom/proi-ui-icons';

  export let stepsDetails = [];

  const nextStep = () => {
    if ($step !== stepsDetails.length - 1) $step += 1;
  };
  const prevStep = () => {
    if ($step !== 0) $step -= 1;
  };
  const setStep = (index) => {
    if ($step !== index) $step = index;
  };
</script>

<div class="steps">
  <div class="center action" on:click={prevStep}>
    <Icon variant="arrowLeft" color="var(--sd-primary)" />
  </div>
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
  <div class="center action" on:click={nextStep}>
    <Icon variant="arrowRight" color="var(--sd-primary)" />
  </div>
</div>
<div class="slot">
  <slot />
</div>

<style>
  .steps {
    display: flex;
    justify-content: space-between;
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

  .action {
    cursor: pointer;
    padding: 0 5px;
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
