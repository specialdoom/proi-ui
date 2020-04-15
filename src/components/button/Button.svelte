<script>
    import {onMount} from "svelte";

    const statusValues = ["primary", "info", "success", "danger", "warning"];
    let borderClass = "rounded";

    export let status = "primary";
    export let outlined = false;
    export let squared = false;
    export let disabled = false;

    onMount(() => {
        if (statusValues.indexOf(status) == -1) {
            status = "primary";
        }
    });
</script>

<style>
    .sd-button {
        width: auto;
        min-width: 100px;
        height: 40px;
        margin: 3px;
        padding: 12px;
        color: #fff;
        text-align: center;
        line-height: 1;
        border-radius: 30px;
        white-space: nowrap;
        font-weight: 300;
        font-size: 15px;
        border: none;
        box-sizing: border-box;
        display: inline-block;
        outline: none;
        user-select: none;
        cursor: pointer;
        transition: all 0.25s;
    }

    .sd-button:disabled {
        opacity: 0.5;
        color: white;
        border: 1px solid grey;
        background: grey;
        cursor:not-allowed;
    }

    .sd-button:disabled:hover {
        opacity: 0.5;
        color: white;
        background: grey;
        border: 1px solid grey;
    }

    .sd-button-outline {
        background: #ffffff;
    }

    .sd-button-outline:hover {
        color: #ffffff;
    }

    .sd-outline-primary {
        border: 1px solid #2398ab;
        color: #2398ab;
    }

    .sd-outline-primary:hover {
        border: 1px solid #2398ab;
        background: #2398ab;
    }

    .sd-primary {
        background: #2398ab;
    }

    .sd-primary:hover {
        background: #2ec1d5;
    }

    .sd-info {
        background: #5199ff;
    }

    .sd-info:hover {
        background: #257dff;
    }

    .sd-outline-info {
        border: 1px solid #5199ff;
        color: #5199ff;
    }

    .sd-outline-info:hover {
        background: #5199ff;
    }

    .sd-danger {
        background: #ee3d48;
    }

    .sd-danger:hover {
        background: #f11823;
    }

    .sd-outline-danger {
        border: 1px solid #ee3d48;
        color: #ee3d48;
    }

    .sd-outline-danger:hover {
        background: #ee3d48;
    }

    .sd-warning {
        background: #ffc11e;
    }

    .sd-warning:hover {
        background: #fdb300;
    }

    .sd-outline-warning {
        border: 1px solid #ffc11e;
        color: #ffc11e;
    }

    .sd-outline-warning:hover {
        background: #ffc11e;
    }

    .sd-success {
        background: #00dc7d;
    }

    .sd-success:hover {
        background: #41eca1;
    }

    .sd-outline-success {
        border: 1px solid #00dc7d;
        color: #00dc7d;
    }

    .sd-outline-success:hover {
        background: #00dc7d;
    }

    .sd-squared {
        border-radius: 5px;
    }
</style>

<button
        class="sd-button
  {squared ? 'sd-squared' : ''}
  {outlined ? `sd-button-outline sd-outline-${status} `:`sd-${status}`}
  "
        {disabled}
        on:click>
    <slot>
        <span>{status.charAt(0).toUpperCase()}{status.slice(1)}</span>
    </slot>

</button>
