<script lang="ts">
  export let percent: number = 0;
  export let error: boolean = false;
  export let indeterminate: boolean = false;
  export let small: boolean = false;
</script>

<div
  class="proi-progress"
  class:small
  {...$$restProps}
>
  <div
    class="proi-progress-line"
    style:width="{indeterminate ? 100 : percent}%"
    class:completed={percent === 100}
    class:error
    class:indeterminate
  />
</div>

<style>
  .proi-progress {
    width: 100%;
    display: flex;
    overflow: hidden;
    background-color: var(--pi-bg, #ffffff);
    border-radius: 4px;
    height: 8px;
  }

  .small {
    height: 4px;
  }

  .proi-progress-line {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: var(--pi-bg-interactive, #3993dd);
    transition: width 0.6s ease;
    border-radius: 4px;
  }

  .completed {
    background-color: var(--pi-pine, #479a89);
    transition: background-color 1s ease, width 0.6s ease;
  }

  .error {
    background-color: var(--pi-bg-error, #e35226);
    transition: background-color 1s ease, width 0.6s ease;
  }

  .indeterminate {
    background-color: var(--pi-bg-interactive, #3993dd);
    animation: indeterminateAnimation 1s infinite linear;
    transform-origin: 0% 50%;
  }

  @keyframes indeterminateAnimation {
    0% {
      transform: translateX(0) scaleX(0);
    }
    40% {
      transform: translateX(0) scaleX(0.4);
    }
    100% {
      transform: translateX(100%) scaleX(0.5);
    }
  }
</style>
