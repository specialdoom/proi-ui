<script>
  import { Spinner, Alert } from "proi-ui";

  const fetchImage = (async () => {
    const response = await fetch(
      "https://api.github.com/repos/specialdoom/proi-ui/issues"
    );
    return await response.json();
  })();
</script>

<style>
  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }
</style>

{#await fetchImage}
  <div class="spinner-container">
    <Spinner labeled label="Getting issues..." />
  </div>
{:then data}
<div class="container">
  Opened issues:
  <ul>
    {#each data as issue}
      <li>
        <a href={issue.html_url}>{issue.title}</a>
      </li>
    {/each}
  </ul>
  Report an issue
  <a href="https://github.com/specialdoom/proi-ui/issues/new/choose">here</a>
  .
  </div>
{:catch error}
  <div style="float: right;">
    <Alert status="error" closable>Error while getting the issues!</Alert>
  </div>
{/await}
