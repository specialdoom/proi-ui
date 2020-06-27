<script>
  export let name = "";
  export let title = "";
  export let image = "";
  export let squared = false;

  $: alias = () => {
    if (name) {
      const names = name.split(" ");
      if (names.length > 0) {
        if (names.length === 2) {
          return names[0].charAt(0) + names[1].charAt(0);
        }
        if (names.length === 1) {
          return names[0].charAt(0);
        }
      }
    }
    return "";
  };
</script>

<style>
  .sd-avatar {
    display: flex;
    margin: 5px 0 5px;
  }

  .sd-avatar-name-and-title {
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

  .sd-avatar-name {
    font-size: 17px;
  }

  .sd-avatar-title {
    font-size: 13px;
  }

  .sd-avatar-alias-rounded {
    border-radius: 50%;
  }

  .sd-avatar-alias-squared {
    border-radius: 10px;
  }
</style>

<span class="sd-avatar">
  {#if image}
    <span
      class="sd-avatar-alias sd-avatar-alias-image {squared ? 'sd-avatar-alias-squared' : 'sd-avatar-alias-rounded'}"
      style="background-image: url({image});" />
  {:else}
    <span
      class="sd-avatar-alias sd-avatar-alias-text {squared ? 'sd-avatar-alias-squared' : 'sd-avatar-alias-rounded'}">
      {alias()}
    </span>
  {/if}
  <span class="sd-avatar-name-and-title">
    <span class="sd-avatar-name">{name}</span>
    <span class="sd-avatar-title">{title}</span>
  </span>
</span>
