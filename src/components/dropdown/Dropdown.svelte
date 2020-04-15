<script>
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
        top: 18px;
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

    .sd-dropdown-buttons-container {
        font-size: 0;
        white-space: nowrap;
        width: 100%;
    }

    .sd-dropdown-button {
        background: none;
        margin: 0;
        box-sizing: border-box;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        outline: none;
    }

    .sd-dropdown-button:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    .sd-dropdown-value-button {
        border: 1px solid grey;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
        padding: 8px;
        width: 88%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .sd-dropdown-action-button {
        border-top: 1px solid grey;
        border-right: 1px solid grey;
        border-bottom: 1px solid grey;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        padding: 8px;
        width: 12%;
        border-left: unset;
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
    }

    .sd-dropdown-first-option {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: unset;
        border-bottom-right-radius: unset;

    }

    .sd-dropdown-icon {
        color: inherit;
        font-style: normal;
        line-height: 0;
        text-align: center;
        text-transform: none;
        vertical-align: -.125em;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
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

<div class="sd-dropdown" {disabled}>
    <div class="sd-dropdown-buttons-container">
        <button class="sd-dropdown-button sd-dropdown-value-button" {disabled}>{selected ? selected : title}</button>
        <button class="sd-dropdown-button sd-dropdown-action-button" on:click={toggleOptions} {disabled}><i
                class="sd-dropdown-icon">
            <svg height="12" viewBox="0 0 512 512" width="12" xmlns="http://www.w3.org/2000/svg">
                <g id="More">
                    <path d="m256 192a64 64 0 1 0 64 64 64.072 64.072 0 0 0 -64-64zm0 112a48 48 0 1 1 48-48 48.055 48.055 0 0 1 -48 48z"/>
                    <path d="m72 192a64 64 0 1 0 64 64 64.072 64.072 0 0 0 -64-64zm0 112a48 48 0 1 1 48-48 48.055 48.055 0 0 1 -48 48z"/>
                    <path d="m440 192a64 64 0 1 0 64 64 64.072 64.072 0 0 0 -64-64zm0 112a48 48 0 1 1 48-48 48.055 48.055 0 0 1 -48 48z"/>
                </g>
            </svg>
        </i>
        </button>
    </div>
    <ul class="sd-dropdown-options-container {toggle ? '' : 'sd-no-display'}">
        {#each options as option, i}
            <li class="sd-dropdown-option {option === selected ? 'sd-dropdown-selected-option' : ''} {i==0 && options.length > 2? 'sd-dropdown-first-option' : ''} {i==options.length-1 && options.length > 2? 'sd-dropdown-last-option' : ''}"
                on:click={() => selectOption(i)}>
                {option}
            </li>
        {/each}
    </ul>
</div>