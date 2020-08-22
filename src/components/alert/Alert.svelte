<script>
    import {Icon} from 'proi-ui-icons';

    let closed = false;
    export let status = "success";
    export let squared = false;
    export let closable = false;
    export let outlined = false;

    let icons = [
        {
            type: 'error',
            iconType: 'no',
            color: '#ee3d48'
        },
        {
            type: 'warning',
            iconType: 'alert',
            color: '#fdb300'
        },
        {
            type: 'success',
            iconType: 'circleChoose',
            color: '#007f50'
        },
        {
            type: 'info',
            iconType: 'hint',
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

    .sd-alert-close-text {
        cursor: pointer;
        font-weight: 400;
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
        color:white;
        border: 1px solid #ee3d48;
    }

    .sd-alert-outline-error {
        color:white;
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

    .sd-alert-icon > svg {
        height: 14px;
    }

    .sd-alert-close-icon > svg {
        height: 10px;
    }

</style>
{#if !closed}
    <div class="sd-alert {outlined ? `sd-alert-outline-${status}`: `sd-alert-${status}`} sd-alert-outline {squared ? 'sd-alert-squared' : ''}"
    >
        <div class="sd-alert-icon">
            <Icon type={icon.iconType} color={icon.color} scale="15"/>
        </div>
        <div class="sd-alert-text">
            <slot>
                Default text
            </slot>
        </div>

        {#if closable}
            <div class="sd-alert-close-icon" on:click={close}>
                <Icon type="circleClose" scale="15"/>
            </div>
        {/if}
    </div>
{/if}
