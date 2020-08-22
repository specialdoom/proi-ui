<script>
    import {toast} from './store/toast';
    import Toast from "./Toast.svelte";

    let toasts = [];

    function add(slice) {
        toasts = [slice, ...toasts];

        timeout();
    }

    function remove() {
        toasts = toasts.slice(0, -1);
    }

    function timeout() {
        setTimeout(() => {
            remove();
        }, 3000)
    }

    $ : _ = toast.subscribe(slice => {
        if (!slice) {
            return;
        }
        add(slice)
    })
</script>


<style>
    .sd-toast-container {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 10;
    }
</style>

<div class="sd-toast-container">
    {#each toasts as toast}
        <Toast {toast}/>
    {/each}
</div>
