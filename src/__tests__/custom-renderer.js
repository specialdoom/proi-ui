import "@testing-library/jest-dom";
import { queryHelpers } from "@testing-library/dom";
import {
  render as baseRender,
  queries as baseQueries,
} from "@testing-library/svelte";

export function getCustomRenderer() {
  const queries = {
    ...baseQueries,
    getBySelector: (container, selector) => {
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

      return els[0];
    }
  };

  return (
    ui,
    options = {}
  ) => baseRender(ui, options, { queries });
}
