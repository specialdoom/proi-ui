import { describe, expect, it } from "vitest";
import Alert from "../Alert.svelte";
import { render } from "./alert.queries.js";

describe("Alert", () => {
  const title = "Title";

  describe("root element", () => {
    it("should be present", () => {
      const { getRoot } = render(Alert, {
        props: {
          title
        }
      });

      expect(getRoot()).toBeInTheDocument();
    });

    it("should contain `proi-alert-container` class", () => {
      const { getRoot } = render(Alert, {
        props: {
          title
        }
      });

      expect(getRoot()).toHaveClass("proi-alert-container");
    });
  });
});
