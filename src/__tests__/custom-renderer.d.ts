import "@testing-library/jest-dom";
import { queries as baseQueries, type RenderResult } from "@testing-library/svelte";
import type { ComponentProps, SvelteComponentDev } from "svelte/internal";
import type { Constructor } from "../lib/utils/types.js";
export declare function getCustomRenderer(): <TComponent extends SvelteComponentDev>(ui: Constructor<TComponent>, options?: RenderOptions<TComponent>) => RenderResult<TComponent, CustomQueriesOutput>;
type RenderOptions<T extends SvelteComponentDev> = {
    props?: ComponentProps<T> & Record<string, any>;
} & Record<string, any>;
type CustomQueriesOutput = typeof baseQueries & {
    getBySelector: (container: HTMLElement, selector: string) => HTMLElement;
};
export {};
