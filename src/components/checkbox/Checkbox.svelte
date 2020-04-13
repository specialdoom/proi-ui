<script>
    export let checked = null;
    export let value = "";
    export let disabled = false;
</script>

<style>
    .sd-checkbox-container {
        display: block;
        position: relative;
        padding-left: 30px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 15px;
        height: 30px !important;
    }

    .sd-checkbox-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .sd-checkbox-checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 15px;
        border: 1px solid black;
    }

    .sd-checkbox-container input:checked ~ .sd-checkbox-checkmark {
        background-color: #2398ab;
        border-color: #2398ab;
        animation: border 1s;
    }

    .sd-checkbox-checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .sd-checkbox-container input:checked ~ .sd-checkbox-checkmark:after {
        display: block;
    }

    .sd-checkbox-container .sd-checkbox-checkmark:after {
        left: 7px;
        top: 3px;
        width: 6px;
        height: 10px;
        border: solid white;
        border-width: 0 1px 1px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        animation: pulse 1s;
    }

    @keyframes pulse {
        0% {
            border-color: #2398ab;
        }
        100% {
            border-color: white;
        }
    }

    .sd-checkbox-square {
        border: 2px solid grey;
        border-radius: 15%;
    }

    .sd-checkbox-square-disabled {
        border: 2px solid grey;
        background: grey;
        border-radius: 15%;
    }

    .sd-checkbox-square:hover {
        border-left-color: #2398ab;
        border-bottom-color: #2398ab;
        border-right-color: #2398ab;
        border-top-color: #2398ab;

        transition: border-left-color 0.1s linear,
        border-bottom-color 0.1s linear 0.1s, border-right-color 0.1s linear 0.2s,
        border-top-color 0.1s linear 0.3s;
    }

    .sd-checkbox-square:not(:hover) {
        border-left-color: grey;
        border-bottom-color: grey;
        border-right-color: grey;
        border-top-color: grey;

        transition: border-left-color 0.1s linear,
        border-bottom-color 0.1s linear 0.1s, border-right-color 0.1s linear 0.2s,
        border-top-color 0.1s linear 0.3s;
    }

    .sd-checkbox-label {
        margin-right: 5px;
        font-size: 16px;
        font-weight: 100;
    }

    .sd-disabled{
        cursor: not-allowed;
    }
</style>

<label class="sd-checkbox-container {disabled ? 'sd-disabled' : ''}">
    <input type="checkbox" bind:checked {disabled}/>
    <span class="sd-checkbox-checkmark {disabled ? 'sd-checkbox-square-disabled' : 'sd-checkbox-square'}"></span>
    <span class="sd-checkbox-label">{value}</span>
</label>