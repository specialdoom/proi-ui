<script>
    export let show = false;

    function close() {
        show = false;
    }
</script>
<style>
    .sd-modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        overflow: auto;
        outline: 0;
    }

    .sd-modal-fade {
        transition: opacity .15s linear;
    }

    .sd-modal-show {
        display: block;
    }

    .sd-modal-not-show {
        display: none;
    }

    .sd-modal-mask {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        background-color: rgba(0, 0, 0, .45);
    }

    .sd-modal-dialog {
        box-sizing: border-box;
        color: rgba(0, 0, 0, .65);
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5;
        list-style: none;
        font-feature-settings: "tnum";
        position: relative;
        top: 100px;
        max-width: 500px;
        width: auto;
        margin: 0 auto;
        padding: 0 0 24px;
        pointer-events: none;
        transition: 1s all ease;
    }

    .sd-modal-content {
        position: relative;
        background-color: #fff;
        background-clip: padding-box;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
        pointer-events: auto;
    }

    .sd-modal-title {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: start;
        align-items: flex-start;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 1rem 1rem;
        border-bottom: 1px solid #dee2e6;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
    }

    .sd-modal-title .sd-title {
        font-weight: 500;
        font-size: 1rem;
    }

    .sd-modal-body {
        position: relative;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: 1rem;
        font-size: 1.5rem;
    }

    .sd-modal-actions {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: end;
        justify-content: flex-end;
        padding: 1rem;
        border-top: 1px solid #dee2e6;
        border-bottom-right-radius: .3rem;
        border-bottom-left-radius: .3rem;
    }

    .sd-modal-close {
        float: right;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        opacity: .5;
        padding: 1rem 1rem;
        margin: -1rem -1rem -1rem auto;
    }

    .sd-modal-close svg {
        height: 18px;
        opacity: .5;
    }

    .sd-modal-close svg:hover {
        opacity: 1;
    }

    @media only screen and (max-width: 600px) {
        .sd-modal-dialog {
            max-width: 350px;
        }
    }

    @media only screen and (max-width: 400px) {
        .sd-modal-dialog {
            max-width: 250px;
        }
    }
</style>
<div class="sd-modal sd-modal-fade {show ? 'sd-modal-show' : 'sd-modal-not-show'}">
    <div class="sd-modal-mask"></div>
    <div class="sd-modal-dialog">
        <div class="sd-modal-content">
            <div class="sd-modal-title">
                <div class="sd-title">
                    <slot name="title"/>
                </div>
                <span class="sd-modal-close" on:click={close}><svg id="icon" data-name="error"
                                                                   viewBox="0 0 12 12"><title>
                icon</title>
                <g id="icon-content" data-name="content">
                    <path d="M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM8.51,7.9a.43.43,0,0,1-.61.61L6,6.61,4.1,8.51a.43.43,0,0,1-.61-.61L5.39,6,3.49,4.1a.43.43,0,0,1,.61-.61L6,5.39l1.9-1.9a.43.43,0,0,1,.61.61L6.61,6Z"></path>
                </g>
            </svg></span></div>
            <div class="sd-modal-body">
                <slot name="body"/>
            </div>
            <div class="sd-modal-actions">
                <slot name="actions"/>
            </div>
        </div>
    </div>
</div>