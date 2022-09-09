<script>
  import { metatags } from '@roxi/routify';
  import { Icon } from '@specialdoom/proi-ui-icons';
  import { TextInput, toaster } from '@specialdoom/proi-ui';
  import Highlight from '../../components/Highlight.svelte';

  metatags.title = 'proi-ui | Icons';

  let searchValue = '';

  let icons = [
    'addToCollection',
    'alarm',
    'alert',
    'antiClockwise',
    'application',
    'arrowDown',
    'arrowLeft',
    'arrowRight',
    'arrowUp',
    'assistant',
    'basketball',
    'batteryEmpty',
    'batteryFull',
    'beer',
    'bell',
    'bookmark',
    'briefcase',
    'bulb',
    'calendar',
    'camera',
    'card',
    'cart',
    'cd',
    'chart',
    'chat',
    'choose',
    'circleArrowDown',
    'circleArrowLeft',
    'circleArrowRight',
    'circleArrowUp',
    'circleChoose',
    'circleClose',
    'circleMinus',
    'circlePlus',
    'clip',
    'clock',
    'clockwise',
    'clothes',
    'cloud',
    'cloud2',
    'cloudDownload',
    'cloudUpload',
    'cocktail',
    'coffee',
    'cog',
    'collection',
    'compass',
    'contacts',
    'coordinates',
    'coupon',
    'crown',
    'desktop',
    'diamond',
    'dollar',
    'download',
    'earphone',
    'earth',
    'edit',
    'empty',
    'enter',
    'euro',
    'eye',
    'file',
    'fileChoose',
    'fileEmpty',
    'fileMinus',
    'filePlus',
    'fileText',
    'filter',
    'flag',
    'focus',
    'form',
    'headphone',
    'heart',
    'help',
    'hint',
    'home',
    'hourglass',
    'hyperlink',
    'idCard',
    'juice',
    'key',
    'leaves',
    'lifeBuoy',
    'list',
    'listChoose',
    'listItem',
    'locked',
    'login',
    'logout',
    'mail',
    'medal',
    'medal2',
    'megaphone',
    'message',
    'microphone',
    'minus',
    'money',
    'moon',
    'mouse',
    'music',
    'mute',
    'navigation',
    'no',
    'pad',
    'phone',
    'picture',
    'pieChart',
    'pin',
    'plane',
    'planet',
    'plus',
    'pound',
    'power',
    'rain',
    'refresh',
    'rocket',
    'ruler',
    'scissors',
    'search',
    'signal',
    'snow',
    'snowAndRain',
    'star',
    'sun',
    'tag',
    'team',
    'telephone',
    'text',
    'thunder',
    'tie',
    'umbrella',
    'unlocked',
    'upload',
    'user',
    'van',
    'vip',
    'volume',
    'wallet',
    'wifi',
    'wine',
    'wrench',
    'yuan',
    'zoomIn',
    'zoomOut'
  ];

  function copy(icon) {
    let inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = `<Icon variant="${icon}" />`;
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
    toaster.send({
      message: 'Copied to clipboard!',
      type: 'info'
    });
  }

  $: filteredIcons = icons.filter((item) => item.includes(searchValue));
</script>

<div class="container">
  <Highlight code="npm i @specialdoom/proi-ui-icons" />
  <Highlight code={`<Icon variant="chosenType" />`} />
  <div class="search">
    <TextInput bind:value={searchValue} />
  </div>
  <div class="icons-container container">
    {#each filteredIcons as icon}
      <div class="icon-card" on:click={() => copy(icon)}>
        <Icon variant={icon} scale={30} />
        {icon}
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .icons-container {
    flex-wrap: wrap;
    flex-direction: row;
  }

  .icon-card {
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
  }

  .icon-card:hover {
    box-shadow: 0px 0px 31px 9px rgba(0, 0, 0, 0.37);
    cursor: pointer;
  }

  .search {
    width: 50%;
    display: flex;
    justify-content: center;
  }
</style>
