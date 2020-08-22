<script>
    import {fade} from 'svelte/transition';
    import {Icon} from 'proi-ui-icons';

    export let percent = 0;
    export let error = false;
    export let height = 15;
</script>

<style>
    .sd-progress {
        margin-top: 5px;
        display: -ms-flexbox;
        display: flex;
        overflow: hidden;
        font-size: .75rem;
        background-color: #e9ecef;
        border-radius: 5.25rem;
    }

    .sd-progress-line {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: center;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        background-color: #2398ab;
        transition: width .6s ease;
        border-radius: 5.25rem;
    }

    .sd-progress-success {
        background-color: #00dc7d;
        transition: background-color 1.5s ease, width .6s ease;
    }

    .sd-progress-error {
        background-color: #ee3d48;
        transition: background-color 1.5s ease, width .6s ease;
    }

    #error-icon {
        height: 11px;
        fill: white;
        transition: display 1s ease;
    }
</style>
<div class="sd-progress" style="height: {height}px">
    <div class="sd-progress-line {percent === 100 ? 'sd-progress-success' : ''} {error ? 'sd-progress-error' : ''}"
         style="width: {percent}%">
        {#if height >= 15}
            {#if error}
                <Icon type="alert" scale="12" color="white"/>
            {:else}
                {percent}%
            {/if}
        {/if}
    </div>
</div>