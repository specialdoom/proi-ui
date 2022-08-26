<script lang="ts">
  import { metatags } from '@roxi/routify';
  import Steps from '../../components/wizard/Steps.svelte';
  import Step from '../../components/wizard/Step.svelte';
  import {
    Installation,
    Styling,
    Theming,
    Enjoy
  } from '../../components/getting-started';
  import type { StepDetail } from '../../components/wizard/step.types';

  metatags.title = 'proi-ui | Getting started';

  const stepsDetails: StepDetail[] = [
    { title: 'Installation' },
    { title: 'Use styling' },
    { title: 'Theming (optional)' },
    { title: 'Enjoy' }
  ];
</script>

<div class="container" style="flex-direction: column">
  <Steps {stepsDetails}>
    <Step index={0}>
      <Installation />
    </Step>
    <Step index={1}>
      <Styling />
    </Step>
    <Step index={2}>
      <Theming />
    </Step>
    <Step index={3}>
      <Enjoy />
    </Step>
  </Steps>
</div>

<style>
  .container {
    display: flex;
    width: 100%;
    height: calc(100vh - 108px);
  }
</style>
