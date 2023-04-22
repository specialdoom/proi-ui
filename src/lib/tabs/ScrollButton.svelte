<script lang="ts">
  export let visible: boolean = false;
  export let direction: "left" | "right";
</script>

{#if visible}
  <div
    on:click
    on:keydown
    on:keyup
    on:keypress
  >
    {#if direction === "left"}
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 1L1 7L7 13"
          stroke="#33363F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    {/if}
    {#if direction === "right"}
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 13L7 7L1 1"
          stroke="#33363F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    {/if}
  </div>
{/if}

<style>
  div {
    padding: 0 8px;
    cursor: pointer;
    padding-bottom: 4px;
  }
</style>
