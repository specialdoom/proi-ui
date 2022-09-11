declare namespace svelte.JSX {
    interface HTMLAttributes<T> {
        onclick_outside?: () => void
    }
}

declare module '*.svelte' {
    export { SvelteComponentDev as default } from 'svelte/internal';
}