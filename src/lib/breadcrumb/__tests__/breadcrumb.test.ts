import { describe } from "vitest";
import { render } from "../../../__tests__/tests.queries.js";
import { ROOT, BREADCRUMB } from "./breadcrumb.selectors.js";
import FakeBreadcrumb from "./FakeBreadcrumb.svelte";
import Breadcrumb from "../index.js";

describe("Breadcrumb", () => {
  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(FakeBreadcrumb);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });
  });

  describe("breadcrumb element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(FakeBreadcrumb);

      expect(getBySelector(BREADCRUMB)).toBeInTheDocument();
    });

    it("should contain `proi-breadcrumb` class", () => {
      const { getBySelector } = render(FakeBreadcrumb);

      expect(getBySelector(BREADCRUMB)).toHaveClass("proi-breadcrumb");
    });

    it("should contain 2 children", () => {
      const { getBySelector } = render(FakeBreadcrumb);

      expect(getBySelector(BREADCRUMB).childElementCount).toBe(2);
    });
  });

  describe("when custom props are passed", () => {
    const customProps = {
      custom: "test"
    };

    it("should be passed as attributes to the root element", () => {
      const { getBySelector } = render(Breadcrumb, {
        props: customProps
      });

      expect(getBySelector(ROOT)).toHaveAttribute("custom", "test");
    });
  });
});
