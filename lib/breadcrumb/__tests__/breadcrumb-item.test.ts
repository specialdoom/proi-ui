import { describe } from "vitest";
import { ROOT, LINK } from "./breadcrumb-item.selectors.js";
import { render } from "../../__tests__/tests.queries.js";
import BreadcrumbItem from "../BreadcrumbItem.svelte";

describe("BreadcrumbItem", () => {
  const href = "href";
  const text = "text";

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(BreadcrumbItem, {
        props: {
          href,
          text
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-breadcrumb-item` class", () => {
      const { getBySelector } = render(BreadcrumbItem, {
        props: {
          href,
          text
        }
      });

      expect(getBySelector(ROOT)).toHaveClass("proi-breadcrumb-item");
    });
  });

  describe("link element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(BreadcrumbItem, {
        props: {
          href,
          text
        }
      });

      expect(getBySelector(LINK)).toBeInTheDocument();
    });

    it("should contain `href` attribute with `href` property as value", () => {
      const { getBySelector } = render(BreadcrumbItem, {
        props: {
          href,
          text
        }
      });

      expect(getBySelector(LINK)).toHaveAttribute("href", href);
    });

    it("should contain `text` proprety as `innerText`", () => {
      const { getBySelector } = render(BreadcrumbItem, {
        props: {
          href,
          text
        }
      });

      expect(getBySelector(LINK)).toHaveTextContent(text);
    });
  });

  describe("when `isCurrent` property", () => {
    describe("is set to `true`", () => {
      const isCurrent = true;

      describe("root element", () => {
        it("should contain `current` class", () => {
          const { getBySelector } = render(BreadcrumbItem, {
            props: {
              href,
              text,
              isCurrent
            }
          });

          expect(getBySelector(ROOT)).toHaveClass("current");
        });
      });
    });

    describe("is set to `false`", () => {
      const isCurrent = false;

      describe("root element", () => {
        it("should not contain `current` class", () => {
          const { getBySelector } = render(BreadcrumbItem, {
            props: {
              href,
              text,
              isCurrent
            }
          });

          expect(getBySelector(ROOT)).not.toHaveClass("current");
        });
      });
    });
  });
});
