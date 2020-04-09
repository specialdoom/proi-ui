<script>
    export let label = "";
    export let value = null;
    export let disabled = false;
    export let group = null;
</script>

<style>
    .sd-radio-container {
        display: block;
        position: relative;
        padding-left: 30px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 15px;
        height: 30px !important;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .sd-radio-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .sd-radio-bullet {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 50px;
        border: 1px solid black;
    }

    .sd-radio-container input:checked ~ .sd-radio-bullet {
        background-color: #2398ab;
        border-color: #2398ab;
        animation: border 1s;
    }

    .sd-radio-bullet:after {
        content: "";
        position: absolute;
        display: none;
    }

    .sd-radio-container input:checked ~ .sd-radio-bullet:after {
        display: block;
    }

    .sd-radio-container .sd-radio-bullet:after {
        left: 6px;
        top: 6px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: white;
        animation: pulse 1s;
    }

    @keyframes pulse {
        0% {
            background: #2398ab;
        }
        100% {
            background: white;
        }
    }

    .sd-radio-circle {
        border: 2px solid grey;
        border-radius: 50%;
    }

    .sd-radio-circle-disabled {
        border: 2px solid grey;
        background: grey;
        border-radius: 50%;
    }

    .sd-radio-circle:hover {
        border-left-color: #2398ab;
        border-bottom-color: #2398ab;
        border-right-color: #2398ab;
        border-top-color: #2398ab;

        transition: border-left-color 0.1s linear,
        border-bottom-color 0.1s linear 0.1s, border-right-color 0.1s linear 0.2s,
        border-top-color 0.1s linear 0.3s;
    }

    .sd-radio-circle:not(:hover) {
        border-left-color: grey;
        border-bottom-color: grey;
        border-right-color: grey;
        border-top-color: grey;

        transition: border-left-color 0.1s linear,
        border-bottom-color 0.1s linear 0.1s, border-right-color 0.1s linear 0.2s,
        border-top-color 0.1s linear 0.3s;
    }

    .sd-radio-label {
        margin-right: 5px;
        font-size: 16px;
        font-weight: 100;
    }
</style>

<label class="sd-radio-container">
    <input type="radio" bind:group {value} {disabled}/>
    <span class="sd-radio-bullet {disabled ? 'sd-radio-circle-disabled' : 'sd-radio-circle'}"></span>
    <span class="sd-radio-label">{label}</span>
</label>