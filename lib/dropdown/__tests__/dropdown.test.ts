import type { DropdownOption } from "../dropdown.types.js";
import { describe } from "vitest";
import { render } from "../../__tests__/tests.queries.js";
import { DROPDOWN, ROOT } from "./dropdown.selectors.js";
import Dropdown from "../Dropdown.svelte";

describe("Dropdown", () => {
  const options: DropdownOption[] = [
    {
      label: "Option 1",
      value: 1
    },
    {
      label: "Option 2",
      value: 2
    },
    {
      label: "Disabled option",
      value: 3,
      disabled: true
    }
  ];

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Dropdown, {
        props: {
          options
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-dropdown-container` class", () => {
      const { getBySelector } = render(Dropdown, {
        props: {
          options
        }
      });

      expect(getBySelector(ROOT)).toHaveClass("proi-dropdown-container");
    });
  });

  describe("dropdown element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Dropdown, {
        props: {
          options
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-dropdown` class", () => {
      const { getBySelector } = render(Dropdown, {
        props: {
          options
        }
      });

      expect(getBySelector(DROPDOWN)).toHaveClass("proi-dropdown");
    });
  });
});
