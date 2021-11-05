<script>
    import {icons} from '../icons';

    export let type = 'proiUi';
    export let color = '#000';
    export let scale = 20;
</script>
{#if icons[type]}
    <svg data-name="{icons[type].name}" viewBox="0 0 12 12" style="width: {scale}px; height: {scale}px;">
        <title>{icons[type].name}-icon</title>
        <g data-name="content">
            {#each icons[type].paths as path}
                <path d="{path}" style="fill:{color}"/>
            {/each}
        </g>
    </svg>
{/if}
