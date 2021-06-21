<script>
  import { Icon } from 'proi-ui-icons';

  import Button from '../components/Button.svelte';
  import Input from '../components/Input.svelte';
  import Checkbox from '../components/Checkbox.svelte';
  import Radio from '../components/Radio.svelte';
  import Dropdown from '../components/Dropdown.svelte';
  import Alert from '../components/Alert.svelte';
  import Tag from '../components/Tag.svelte';
  import Backdrop from '../components/Backdrop.svelte';
  import Modal from '../components/Modal.svelte';
  import Progress from '../components/Progress.svelte';
  import Spinner from '../components/Spinner.svelte';
  import Avatar from '../components/Avatar.svelte';
  import Toast from '../components/Toast.svelte';

  const options = [
    { text: 'Button', component: Button },
    { text: 'Input', component: Input },
    { text: 'Checkbox', component: Checkbox },
    { text: 'Radio', component: Radio },
    { text: 'Dropdown', component: Dropdown },
    { text: 'Alert', component: Alert },
    { text: 'Tag', component: Tag },
    { text: 'Backdrop', component: Backdrop },
    { text: 'Modal', component: Modal },
    { text: 'Progress', component: Progress },
    { text: 'Spinner', component: Spinner },
    { text: 'Avatar', component: Avatar },
    { text: 'Toast', component: Toast }
  ];

  options.sort((a, b) => {
    if (a.text > b.text) return 1;
    if (a.text < b.text) return -1;
    return 0;
  });

  let selected = options[0];

  let open = false;

  function toggle() {
    open = !open;
  }

  function changeSelected(index) {
    selected = options[index];
    open = false;
  }
</script>

<svelte:head>
  <title>proi-ui | Docs</title>
</svelte:head>

<div class="docs-container ">
  <div class="left-side">
    <div class="select-option" on:click={toggle}>
      <span class="select-option-title">Components</span>
      <span class="select-option-icon">
        <Icon type={open ? 'circleArrowDown' : 'circleArrowUp'} scale="15" />
      </span>
    </div>
    <div class="select" style={open ? '' : 'display:none'}>
      {#each options as option, index}
        <div
          class="option {selected.text == option.text ? 'selected' : ''}"
          on:click={() => changeSelected(index)}
        >
          {option.text}
        </div>
      {/each}
    </div>
    <div class="unselect">
      {#each options as option, index}
        <div
          class="option {selected.text == option.text ? 'selected' : ''}"
          on:click={() => changeSelected(index)}
        >
          {option.text} &nbsp;
        </div>
      {/each}
    </div>
  </div>
  <div class="right-side">
    <svelte:component this={selected.component} />
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
    font-weight: 100;
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
    content: '';
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
      content: '';
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
