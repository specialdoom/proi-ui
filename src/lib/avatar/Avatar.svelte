<script lang="ts">
  import type { AvatarVariant } from './avatar.types.js';

  export let initials: string = '';
  export let variant: AvatarVariant = 'pine';
  export let image: string = '';

  $: style =
    image !== ''
      ? `background: url(${image}) center center/50px 50px no-repeat;`
      : '';
</script>

<div class="proi-avatar {variant}" {style} data-testid="proi-avatar">
  {#if initials !== '' && image === ''}
    {initials}
  {/if}
</div>

<style>
  @import '../shared/css/data-display-variants.css';

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
