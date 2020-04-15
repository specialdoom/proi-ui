<script>
    export let open = false;
</script>
<style>
    .sd-backdrop {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        z-index: -1;
        position: fixed;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-tap-highlight-color: transparent;
        color: #fff;
        z-index: 1201;
    }

    .sd-backdrop-open {
        opacity: 1;
        transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    .sd-backdrop-closed {
        opacity: 0;
        transition: opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        visibility: hidden;
    }

</style>
<div class="sd-backdrop {open ? 'sd-backdrop-open' : 'sd-backdrop-closed'}" on:click>
    <div>
        <slot />
    </div>
</div>