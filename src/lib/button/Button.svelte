<script lang="ts">
  import type { ButtonVariant } from "./button.types.js";
  export let variant: ButtonVariant = "primary";
  export let disabled: boolean = false;
  export let block: boolean = false;
  export let className: string = "";
</script>

<button
  class="proi-button {variant} {className}"
  class:block
  {disabled}
  on:click
  data-testid="proi-button"
>
  <slot />
</button>

<style>
  @import "./button.css";
</style>
