<script>
    import {onMount} from "svelte";

    let element;

    export let type = "text";
    export let placeholder = "";
    export let value = null;
    export let squared = false;
    export let error = "";
    export let success = false;
    export let label = "Label";
    export let disabled = false;

    onMount(() => {
        if (type !== "text" && type !== "password") {
            type = "text";
        }
        element.type = type;
    });
</script>

<style>
    .sd-input {
        border: 1px solid grey;
        border-radius: 50px;
        width: 100%;
        height: 33px !important;
        font-size: 13px;
        margin: 0;
        padding: 0 0 0 15px;
        box-sizing: border-box;
        outline: none;
        caret-color: grey;
    }

    .sd-input:disabled {
        border: 0.5px dashed;
        cursor: not-allowed;
    }

    .sd-input-squared {
        border-radius: 5px;
    }

    .sd-input-error {
        border-color: #ff6a61;
        color: #ff6a61;
    }

    .sd-error {
        color: #ff6a61;
        display: inline-block;
        font-size: 12px;
        line-height: 15px;
        margin: 7px 0 0;
    }

    .sd-input-success {
        border-color: #35d073;
        color: #35d073;
    }

    .sd-label {
        display: block;
        margin: 5px;
        font-weight: 100;
    }

    .sd-label-error {
        color: #ff6a61;
    }

    .sd-input-container {
        width: 100%;
        transition: all ease 0.5s;
    }
</style>

<div class="sd-input-container">
    <label class="sd-label {error ? 'sd-label-error' : ''}">{label}</label>
    <input
            {placeholder}
            bind:value
            class="sd-input {error ? 'sd-input-error' : ''}
    {success ? 'sd-input-success' : ''}
    {squared ? 'sd-input-squared' : ''}"
            on:change
            bind:this={element} {disabled}/>
    <div class="sd-error">{error}</div>
</div>
