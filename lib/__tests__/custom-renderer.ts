import "@testing-library/jest-dom";
import { queryHelpers } from "@testing-library/dom";
import {
  render as baseRender,
  queries as baseQueries,
  type RenderResult
} from "@testing-library/svelte";
import type { ComponentProps, SvelteComponentDev } from "svelte/internal";
import type { Constructor } from "../utils/types.js";

export function getCustomRenderer() {
  const queries: CustomQueriesOutput = {
    ...baseQueries,
    getBySelector: (container: HTMLElement, selector) => {
      const els = container.querySelectorAll(selector);

      if (!els.length) {
        throw queryHelpers.getElementError("Unable to find element", container);
      }

      if (els.length > 1) {
        throw queryHelpers.getElementError(
          "Found multiple elements with the same selector",
          container
        );
      }

      return els[0] as HTMLElement;
    }
  };

  return <TComponent extends SvelteComponentDev>(
    ui: Constructor<TComponent>,
    options: RenderOptions<TComponent> = {} as RenderOptions<TComponent>
  ): RenderResult<TComponent, CustomQueriesOutput> =>
    baseRender(ui, options as any, { queries }) as any;
}

type RenderOptions<T extends SvelteComponentDev> = {
  props?: ComponentProps<T> & Record<string, any>;
} & Record<string, any>;

type CustomQueriesOutput = typeof baseQueries & {
  getBySelector: (container: HTMLElement, selector: string) => HTMLElement;
};
