<script>
  export let title = '';
  export let description = '';
  export let image = '';

  $: alias = () => {
    if (title) {
      return title
        .split(/\s/)
        .reduce((response, word) => (response += word.slice(0, 1)), '');
    }
    return '';
  };
</script>

<span class="sd-avatar">
  {#if image}
    <span
      class="sd-avatar-alias sd-avatar-alias-image"
      style="background-image: url({image});"
    />
  {:else}
    <span class="sd-avatar-alias sd-avatar-alias-text">
      {alias()}
    </span>
  {/if}
  <span class="sd-avatar-title-and-description">
    <span class="sd-avatar-title">{title}</span>
    <span class="sd-avatar-description">{description}</span>
  </span>
</span>

<style>
  .sd-avatar {
    display: flex;
    margin: 5px 0 5px;
  }

  .sd-avatar-title-and-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left: 10px;
  }

  .sd-avatar-alias {
    width: 50px;
    min-width: 50px;
    min-height: 50px;
    height: 50px;
    font-weight: 300;
    border-radius: 10px;
  }

  .sd-avatar-alias-image {
    background-repeat: no-repeat;
    background-size: 50px 50px;
  }

  .sd-avatar-alias-text {
    border: 1px solid rgba(35, 152, 171);
    color: black;
    display: flex;
    justify-content: center;
    font-weight: 300;
    font-size: 20px;
    align-items: center;
  }

  .sd-avatar-title {
    font-size: 18px;
  }

  .sd-avatar-description {
    font-size: 14px;
  }
</style>
