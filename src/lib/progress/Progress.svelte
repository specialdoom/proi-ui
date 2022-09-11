<script lang="ts">
  export let percent: number = 0;
  export let error: boolean = false;
</script>

<div class="proi-progress">
  <div
    class="proi-progress-line"
    style="width: {percent}%"
    class:success={percent === 100}
    class:error
  />
</div>

<style>
  .proi-progress {
    width: 100%;
    display: flex;
    overflow: hidden;
    background-color: var(--n0);
    border-radius: 4px;
    height: 8px;
  }

  .proi-progress-line {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: var(--b400);
    transition: width 0.6s ease;
    border-radius: 4px;
  }

  .success {
    background-color: var(--g400);
    transition: background-color 1s ease, width 0.6s ease;
  }

  .error {
    background-color: var(--r400);
    transition: background-color 1s ease, width 0.6s ease;
  }
</style>
