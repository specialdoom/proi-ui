<script lang="ts">
  export let percent: number = 0;
  export let error: boolean = false;
  export let className: string = null;
  export let lineClassName: string = null;
</script>

<div class="sd-progress {className}">
  <div
    class="sd-progress-line {lineClassName}"
    style="width: {percent}%"
    class:sd-progress-success={percent === 100}
    class:sd-progress-error={error}
  />
</div>

<style>
  .sd-progress {
    margin: 5px 0;
    display: flex;
    overflow: hidden;
    font-size: 14px;
    background-color: var(--sd-light-grey);
    border-radius: 4px;
    height: 8px;
  }

  .sd-progress-line {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    color: var(--sd-white);
    text-align: center;
    white-space: nowrap;
    background-color: var(--sd-primary);
    transition: width 0.6s ease;
    border-radius: 4px;
  }

  .sd-progress-success {
    background-color: var(--sd-success);
    transition: background-color 1s ease, width 0.6s ease;
  }

  .sd-progress-error {
    background-color: var(--sd-error);
    transition: background-color 1s ease, width 0.6s ease;
  }
</style>
