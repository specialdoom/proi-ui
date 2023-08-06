<script lang="ts">
  import type { SpinnerSize } from "./types";

  /** Specify the size of the spinner. */
  export let size: SpinnerSize = "small";
</script>

<svg
  width="18"
  height="18"
  viewBox="0 0 18 18"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="proi-spinner {size}"
>
  <path
    class="proi-spinner-track"
    d="M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
    stroke="#D6D6D6"
    stroke-width="2"
  />
  <path
    class="proi-spinner-fill"
    d="M1 9C1 13.4183 4.58172 17 9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1"
    stroke="#1A6FB6"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

<style>
  .proi-spinner {
    animation: spin 1s linear infinite;
  }

  .proi-spinner-track {
    stroke: var(--pi-bg-hover);
  }

  .proi-spinner-fill {
    stroke: var(--pi-bg-interactive);
  }

  .small {
    width: 16px;
    height: 16px;
  }

  .medium {
    width: 32px;
    height: 32px;
  }

  .large {
    width: 48px;
    height: 48px;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
