<script>
    import {fade} from 'svelte/transition';

    let closed = false;
    export let status = "success";
    export let squared = false;
    export let closable = false;
    export let outlined = false;

    let icons = [
        {
            type: 'error',
            path: 'M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM8.51,7.9a.43.43,0,0,1-.61.61L6,6.61,4.1,8.51a.43.43,0,0,1-.61-.61L5.39,6,3.49,4.1a.43.43,0,0,1,.61-.61L6,5.39l1.9-1.9a.43.43,0,0,1,.61.61L6.61,6Z',
            color: '#ee3d48'
        },
        {
            type: 'warning',
            path: 'M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM6,9a.43.43,0,1,1,.43-.43A.43.43,0,0,1,6,9ZM6.43,7a.43.43,0,0,1-.86,0V3.46a.43.43,0,0,1,.86,0Z',
            color: '#fdb300'
        },
        {
            type: 'success',
            path: 'M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM9.82,4.12,5.73,8.21a.49.49,0,0,1-.35.14A.47.47,0,0,1,5,8.21l-2-2a.46.46,0,0,1,0-.67.47.47,0,0,1,.66,0L5.38,7.23,9.16,3.45a.47.47,0,0,1,.66,0A.46.46,0,0,1,9.82,4.12Z',
            color: '#007f50'
        },
        {
            type: 'info',
            path: 'M6,12A6,6,0,1,0,0,6,6,6,0,0,0,6,12ZM6,3a.43.43,0,1,1-.43.43A.43.43,0,0,1,6,3ZM5.57,5a.43.43,0,0,1,.86,0V8.54a.43.43,0,0,1-.86,0Z',
            color: '#257dff'
        }
    ]

    $ : icon = icons.filter(item => item.type == status)[0];

    function close() {
        closed = true;
    }
</script>

<style>
    .sd-alert {
        display: flex;
        padding: 6px 16px;
        font-size: 0.875rem;
        border-radius: 50px;
        font-weight: 100;
        line-height: 1.43;
        letter-spacing: 0.01071em;
    }

    .sd-alert-text {
        padding: 8px 0;
    }

    .sd-alert-close-icon {
        display: flex;
        align-items: center;
        margin-left: auto;
        padding-left: 16px;
        opacity: 0.5;
    }

    .sd-alert-icon {
        display: flex;
        opacity: 0.9;
        align-items: center;
        font-size: 22px;
        margin-right: 12px;
        fill: #007f50;
    }

    .sd-alert-outline {
        background: transparent;
    }

    .sd-alert-squared {
        border-radius: 4px;
    }

    .sd-alert-success {
        background: #9eecba;
        border: 1px solid #007f50;
    }

    .sd-alert-outline-success {
        border: 1px solid #007f50;
    }

    .sd-alert-error {
        background: #f3737c;
        border: 1px solid #ee3d48;
    }

    .sd-alert-outline-error {
        border: 1px solid #ee3d48;
    }

    .sd-alert-info {
        background: #79aaf3;
        border: 1px solid #257dff;
    }

    .sd-alert-outline-info {
        border: 1px solid #257dff;
    }

    .sd-alert-warning {
        background: #fadc8d;
        border: 1px solid #fdb300;
    }

    .sd-alert-outline-warning {
        border: 1px solid #fdb300;
    }

    .sd-alert-close-icon:hover {
        opacity: 1;
    }

    .sd-alert-close-icon:before, .sd-alert-close-icon:after {
        position: absolute;
        content: ' ';
        height: 12px;
        width: 1px;
        background-color: #333;
    }

    .sd-alert-close-icon:before {
        transform: rotate(45deg);
    }

    .sd-alert-close-icon:after {
        transform: rotate(-45deg);
    }

    .sd-alert-icon > svg {
        height: 14px;
    }

</style>
{#if !closed}
    <div class="sd-alert {outlined ? `sd-alert-outline-${status}`: `sd-alert-${status}`} sd-alert-outline {squared ? 'sd-alert-squared' : ''}"
         transition:fade>
        <div class="sd-alert-icon" style="fill: {icon.color}">
            <svg id="icon" data-name="{icon.type}" viewBox="0 0 12 12">
                <title>
                    icon</title>
                <g id="icon-content" data-name="content">
                    <path d="{icon.path}"/>
                </g>
            </svg>
        </div>
        <div class="sd-alert-text">
            <slot>
                Default text
            </slot>
        </div>

        {#if closable}
            <i class="sd-alert-close-icon" on:click={close}></i>
        {/if}
    </div>
{/if}