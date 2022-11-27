import "@testing-library/jest-dom";
import { queryHelpers } from "@testing-library/dom";
import {
  render as baseRender,
  queries as baseQueries,
  type RenderResult
} from "@testing-library/svelte";
import type { ComponentProps, SvelteComponentDev } from "svelte/internal";
import type { Constructor } from "../utils/types.js";

export function getCustomRenderer(inputQueries: CustomQueriesInput) {
  const queries: CustomQueriesOutput = {
    ...baseQueries,
    ...buildSingleElementQueries(inputQueries ?? ({} as CustomQueryDescriptors))
  };

  return <TComponent extends SvelteComponentDev>(
    ui: Constructor<TComponent>,
    options: RenderOptions<TComponent> = {} as RenderOptions<TComponent>
  ): RenderResult<TComponent, CustomQueriesOutput> =>
    baseRender(ui, options as any, { queries }) as any;
}

function buildSingleElementQueries(
  queries: CustomQueryDescriptors
): SingleElementQueries {
  const keys = Object.keys(queries) as (keyof CustomQueryDescriptors)[];

  return keys.reduce((sum, key) => {
    sum[key] = (container: HTMLElement) =>
      runSelector<HTMLElement>(container, queries[key].selector, queries[key].name);
    return sum;
  }, {} as SingleElementQueries);
}

/**
 * Helper function used to run component selector queries. This function expect
 * to always found the element and only one unique reference of it otherwise it
 * throws errors to help found early issue in our test cases.
 *
 * @param container
 * Reference of the element supposed to contains the element to query.
 *
 * @param selector
 * Dom selector query to execute.
 *
 * @param elementName
 * Name of the element to for that will displays in thrown errors.
 *
 * @returns
 * Returns the queried dom element. Otherwise, throws an error.
 */
function runSelector<T extends HTMLElement>(
  container: HTMLElement,
  selector: string,
  elementName: string,
  nth?: number | undefined
): T {
  const els = container.querySelectorAll(
    nth === undefined ? selector : selector.replace("%", nth.toString())
  );

  if (!els.length) {
    throw queryHelpers.getElementError(
      `Unable to find the ${elementName} element`,
      container
    );
  }

  if (els.length > 1) {
    throw queryHelpers.getElementError(
      `Found multiple ${elementName} elements`,
      container
    );
  }

  return els[0] as T;
}

type RenderOptions<TComponent extends SvelteComponentDev> = {
  props?: ComponentProps<TComponent> & Record<string, any>;
} & Record<string, any>;

interface CustomQueryDescriptor {
  selector: string;
  name: string;
}

type CustomQueryDescriptors = {
  [k: string]: CustomQueryDescriptor;
};

type SingleElementQueries = {
  [P in keyof CustomQueryDescriptors]: (container: HTMLElement) => HTMLElement;
};

type CustomQueriesInput = CustomQueryDescriptors;

type CustomQueriesOutput = typeof baseQueries & SingleElementQueries;
