<script>
  export let data = [];
  export let columns = [];
</script>

<div class="table-container">
  <div class="table">
    <div class="table-header">
      {#each columns as column}
        <div>
          {column.value}
        </div>
      {/each}
    </div>
    <div class="table-data">
      {#each data as item}
        <div>
          {#each Object.values(item) as value}
            <div>
              {@html value}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .table-container {
    overflow: auto;
  }

  .table {
    width: 100%;
  }

  .table-header {
    display: flex;
    justify-content: space-around;
    background: rgba(35, 152, 171, 0.5);
    border-bottom: 2px solid rgba(35, 152, 171);
  }

  .table-header > div {
    box-sizing: border-box;
    padding: 10px;
    width: 20%;
  }

  .table-data {
    display: flex;
    flex-direction: column;
  }

  .table-data > div {
    display: flex;
    justify-content: space-around;
    width: 100%;
    border-bottom: 1px solid rgba(35, 152, 171, 0.5);
  }

  .table-data > div > div {
    box-sizing: border-box;
    padding: 10px;
    width: 20%;
  }
</style>
