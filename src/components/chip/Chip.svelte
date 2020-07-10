<script>
    export let closable = false;
    export let outlined = false;
    export let squared = false;
    export let disabled = false;
    export let type = "default";
    export let label = "";

    let closed = false;

    function close() {
        closed = true;
    }
</script>
<style>
    .sd-chip {
        border: none;
        cursor: default;
        height: 20px;
        min-width: 20px;
        display: inline-flex;
        outline: 0;
        color: white;
        padding: 0;
        font-size: 12px;
        box-sizing: border-box;
        align-items: center;
        white-space: nowrap;
        border-radius: 16px;
        vertical-align: middle;
        justify-content: center;
    }

    .sd-chip-squared {
        border-radius: 4px;
    }

    .sd-chip-disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    .sd-chip-outline {
        background: transparent;
    }

    .sd-chip-default {
        background-color: #2398ab;
    }

    .sd-chip-default-outline {
        border: 1px solid #2398ab;
        color: #2398ab;
    }

    .sd-chip-primary {
        background-color: #79aaf3;
    }

    .sd-chip-primary-outline {
        border: 1px solid #79aaf3;
        color: #79aaf3;
    }

    .sd-chip-secondary {
        background-color: #ff6a61;
    }

    .sd-chip-secondary-outline {
        border: 1px solid #ff6a61;
        color: #ff6a61;
    }

    .sd-chip-label {
        overflow: hidden;
        white-space: nowrap;
        padding-left: 12px;
        padding-right: 12px;
        text-overflow: ellipsis;
    }

    .sd-chip-label-default{
        padding-left: 0px;
        padding-right: 0px;
    }

    .sd-chip-close-icon {
        display: flex;
        align-items: center;
        margin-left: auto;
        padding-left: 16px;
        opacity: 0.5;
    }

    svg {
        padding-right: 5px;
        height: 10px;
        fill: white;
        opacity: 0.7;
    }

    .sd-svg-default {
        fill: #2398ab;
    }

    .sd-svg-primary {
        fill: #79aaf3;
    }

    .sd-svg-secondary {
        fill: #ff6a61;
    }

    svg:hover {
        opacity: 1;
    }


</style>
{#if !closed}
    <div on:click class="sd-chip {disabled ? 'sd-chip-disabled' : '' } {squared ? 'sd-chip-squared' : ''} {outlined ? `sd-chip-outline sd-chip-${type}-outline` : `sd-chip-${type}`}">
    <span class="sd-chip-label {label==='' ? 'sd-chip-label-default' : ''}">
        {label}
    </span>
        {#if closable && disabled === false}
            <svg id="icon" data-name="error" viewBox="0 0 12 12" class="{outlined ? `sd-svg-${type}`: ''}"
                 on:click={close}><title>
                icon</title>
                <g id="icon-content" data-name="content">
                    <path d="M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM8.51,7.9a.43.43,0,0,1-.61.61L6,6.61,4.1,8.51a.43.43,0,0,1-.61-.61L5.39,6,3.49,4.1a.43.43,0,0,1,.61-.61L6,5.39l1.9-1.9a.43.43,0,0,1,.61.61L6.61,6Z"></path>
                </g>
            </svg>
        {/if}
    </div>
{/if}