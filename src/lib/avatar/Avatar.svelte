<script lang="ts">
  import { getStyle } from './get-style.js';

  export let initials: string = '';
  export let color: string = '#EFF1F3';
  export let background: string = '#357266';
  export let image: string = '';

  const style = getStyle(background, color, image);
</script>

<div class="proi-avatar" {style}>
  {#if initials !== ''}
    {initials}
  {/if}
</div>

<style>
  .proi-avatar {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
  }
</style>
