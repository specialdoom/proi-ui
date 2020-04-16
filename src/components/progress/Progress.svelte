<script>
    import {fade} from 'svelte/transition';

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

    #success-icon {
        height: 11px;
        fill: green;
        transition: display 1s ease;
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
                <svg id="error-icon" data-name="error" viewBox="0 0 12 12" class="svelte-1yfwcmz"><title>icon</title>
                    <g id="icon-content" data-name="content">
                        <path d="M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM8.51,7.9a.43.43,0,0,1-.61.61L6,6.61,4.1,8.51a.43.43,0,0,1-.61-.61L5.39,6,3.49,4.1a.43.43,0,0,1,.61-.61L6,5.39l1.9-1.9a.43.43,0,0,1,.61.61L6.61,6Z"></path>
                    </g>
                </svg>
            {:else}
                {percent}%
            {/if}
        {/if}
    </div>
</div>