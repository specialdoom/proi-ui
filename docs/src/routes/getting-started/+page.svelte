<script lang="ts">
  import Steps from "$lib/components/wizard/Steps.svelte";
  import Step from "$lib/components/wizard/Step.svelte";
  import {
    Installation,
    Styling,
    Theming,
    Enjoy,
  } from "$lib/components/getting-started";
  import type { StepDetail } from "$lib/components/wizard/step.types";

  const stepsDetails: StepDetail[] = [
    { title: "Installation" },
    { title: "Use styling" },
    { title: "Theming (optional)" },
    { title: "Enjoy" },
  ];
</script>

<svelte:head>
  <title>proi-ui | Getting started</title>
</svelte:head>

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
