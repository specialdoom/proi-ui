declare module svelte.JSX {
  interface HTMLAttributes<T> {
    onclick_outside?: () => void
  }
}
