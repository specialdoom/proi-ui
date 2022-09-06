<script>
  import { metatags } from "@roxi/routify";
  import { Icon } from "@specialdoom/proi-ui-icons";
  import { url, isActive } from "@roxi/routify";

  metatags.title = "proi-ui | Components";

  const options = [
    { text: "Button", path: "./button" },
    { text: "Input", path: "./input" },
    { text: "Checkbox", path: "./checkbox" },
    { text: "Radio", path: "./radio" },
    { text: "Dropdown", path: "./dropdown" },
    { text: "Alert", path: "./alert" },
    { text: "Tag", path: "./tags" },
    { text: "Backdrop", path: "./backdrop" },
    { text: "Dialog", path: "./dialog" },
    { text: "Progress", path: "./progress" },
    { text: "Spinner", path: "./spinner" },
    { text: "Avatar", path: "./avatar" },
    { text: "Toast", path: "./toast" },
  ];

  options.sort((a, b) => {
    if (a.text > b.text) return 1;
    if (a.text < b.text) return -1;
    return 0;
  });

  let open = false;

  function toggle() {
    open = !open;
  }
</script>

<div class="docs-container ">
  <div class="left-side">
    <div class="select-option" on:click={toggle}>
      <span class="select-option-title">Components</span>
      <span class="select-option-icon">
        <Icon variant={open ? "circleArrowDown" : "circleArrowUp"} scale={15} />
      </span>
    </div>
    <div class="select" style={open ? "" : "display:none"}>
      {#each options as option}
        <a href={$url(option.path)}>
          <div class="option" class:selected={$isActive(option.path)}>
            {option.text}
          </div>
        </a>
      {/each}
    </div>
    <div class="unselect">
      {#each options as option}
        <a href={$url(option.path)}>
          <div class="option" class:selected={$isActive(option.path)}>
            {option.text} &nbsp;
          </div>
        </a>
      {/each}
    </div>
  </div>
  <div class="right-side">
    <slot />
  </div>
</div>

<style>
  .docs-container {
    display: flex;
    width: 100%;
    height: calc(100vh - 108px);
    box-sizing: border-box;
  }

  .left-side {
    width: 15%;
    height: 100%;
    border-right: 1px solid rgba(35, 152, 171, 0.1);
    transition: all 1s ease;
  }
  .right-side {
    width: 85%;
    height: 100%;
    overflow: auto;
    padding: 10px;
    box-sizing: border-box;
  }

  .option {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    box-sizing: border-box;
    font-weight: 300;
  }

  .select a,
  .unselect a {
    text-decoration: unset;
  }

  .option:hover,
  .selected:hover {
    background: rgba(35, 152, 171, 0.5);
  }

  .selected {
    position: relative;
    background: rgba(35, 152, 171, 0.3);
  }

  .selected:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    bottom: 0;
    border-right: 2px solid rgba(35, 152, 171);
    display: block;
  }

  .select-option {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    .docs-container {
      flex-direction: column;
    }

    .left-side {
      position: relative;
      display: flex;
      width: 100%;
      height: 40px;
    }

    .right-side {
      overflow: unset;
      width: 100%;
    }

    .select {
      position: absolute;
      width: 100%;
      top: 41px;
      z-index: 999;
      background-color: #fff;
      border-bottom: 2px solid rgba(35, 152, 171);
    }

    .unselect {
      display: none;
    }

    .select-option {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      border-bottom: 2px solid rgba(35, 152, 171);
    }

    .option {
      width: 100%;
    }

    .selected:after {
      position: unset;
      content: "";
      width: unset;
      height: unset;
    }
  }

  .select-option-title {
    width: 90%;
    text-align: center;
  }

  .select-option-icon {
    width: 10%;
    display: flex;
    align-items: center;
  }
</style>
