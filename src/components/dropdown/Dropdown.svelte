<script>
    import {Icon} from 'proi-ui-icons';

    export let options = [];

    let toggle = false;
    export let title = "Title";
    export let selected = options[0];
    export let disabled = false;

    function toggleOptions() {
        toggle = !toggle;
    }

    function selectOption(index) {
        selected = options[index];
        toggleOptions();
    }

</script>

<style>
    .sd-dropdown {
        position: relative;
        user-select: none;
        outline: none;
        margin: 5px;
        width: 300px;
    }

    .sd-dropdown-options-container {
        position: absolute;
        top: 13px;
        width: auto;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
        list-style-type: none;
        background: white;
        padding-inline-start: unset;
        z-index: 5;
        min-width: 300px;
        text-align: center;
    }

    .sd-dropdown-button {
        background: none;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        margin: 0;
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        outline: none;
    }

    .sd-dropdown-button-title {
        white-space: nowrap;
        overflow: hidden;
        width: 90%;
        text-overflow: ellipsis;
    }

    .sd-dropdown-button-icon {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 1px solid;
    }


    .sd-dropdown-button:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    .sd-no-display {
        display: none;
    }

    .sd-dropdown-option {
        box-sizing: border-box;
        padding: 5px;
        z-index: 5;
    }

    .sd-dropdown-selected-option {
        border-left: 2px solid rgb(35, 152, 171);
        border-right: 2px solid rgb(35, 152, 171);
    }

    .sd-dropdown-first-option {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: unset;
        border-bottom-right-radius: unset;

    }

    .sd-dropdown-single-option {
        border-radius: 10px;
    }

    .sd-dropdown-last-option {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-right-radius: unset;
        border-top-left-radius: unset;
    }

    .sd-dropdown-option:hover, .sd-dropdown-last-option:hover, .sd-dropdown-first-option:hover {
        background: rgba(35, 152, 171, 0.5);
    }
</style>

<div class="sd-dropdown">
    <button {disabled} on:click={toggleOptions} class="sd-dropdown-button">
        <span class="sd-dropdown-button-title">{selected ? selected : title}</span>
        <span class="sd-dropdown-button-icon">
            <Icon type="{toggle ? 'circleArrowUp' : 'circleArrowDown'}" scale="15"/>
        </span>
    </button>
    <ul class="sd-dropdown-options-container {toggle ? '' : 'sd-no-display'}">
        {#each options as option, i}
            <li class="sd-dropdown-option {option === selected ? 'sd-dropdown-selected-option' : ''} { i==0 && options.length === 1 ? 'sd-dropdown-single-option' : ''} {i==0 && options.length >= 2? 'sd-dropdown-first-option' : ''} {i==options.length-1 && options.length >= 2? 'sd-dropdown-last-option' : ''}"
                on:click={() => selectOption(i)}>
                {option}
            </li>
        {/each}
    </ul>
</div>