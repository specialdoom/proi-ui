<script>
  export let percent = 0;
  export let error = false;
</script>

<div class="sd-progress">
  <div
    class="sd-progress-line"
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
    background-color: #e9ecef;
    border-radius: 4px;
    height: 5px;
  }

  .sd-progress-line {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #2398ab;
    transition: width 0.6s ease;
    border-radius: 4px;
  }

  .sd-progress-success {
    background-color: #00dc7d;
    transition: background-color 1.5s ease, width 0.6s ease;
  }

  .sd-progress-error {
    background-color: #ee3d48;
    transition: background-color 1.5s ease, width 0.6s ease;
  }
</style>
