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
  @import "./progress.css";
</style>
