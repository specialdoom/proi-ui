import { describe } from "vitest";
import { render } from "../../../__tests__/tests.queries.js";
import { ROOT } from "./link.selectors.js";
import Link from "../Link.svelte";

describe("Link", () => {
  const href = "#";
  const title = "Some link";

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Link, {
        props: {
          href,
          title
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should have `href` attribute set to `href` property value", () => {
      const { getBySelector } = render(Link, {
        props: {
          href,
          title
        }
      });

      expect(getBySelector(ROOT)).toHaveAttribute("href", href);
    });

    it("should have `title` attribute set to `title` property value", () => {
      const { getBySelector } = render(Link, {
        props: {
          href,
          title
        }
      });

      expect(getBySelector(ROOT)).toHaveAttribute("title", title);
    });
  });
});
