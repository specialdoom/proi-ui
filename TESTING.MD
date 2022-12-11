## How do we write unit tests for `proi-ui` components?

1. Define component's element(s) selector(s) in a `*.selectors.ts` file as constants:
   - `ROOT` selector as the container of component
   - `SPECIFIC_NAME` for other selectors

```sveltehtml
// Placeholder.svelte

<script lang="ts">
    export let prop: PropType = "default value if neccessary";
</script>

<div class="proi-placeholder">
    <div class="proi-placeholder-element">
        Content
    </div>
</div>
```

1. Test component structure
   1. If strucutre of component is conditional, wrap that inside a prop test
2. Test component behaviour based on different values for props
3. Test events handling

## How do we structure unit tests for `utils` functions?

1. There should be a `__tests__` folder inside `utils` folder
2. Write the unit test for specific function in a specific file
