import { describe } from "vitest";
import { render, waitFor } from "../../../__tests__/tests.queries.js";
import { toast } from "../store/toast.js";
import ToastProvider from "../ToastProvider.svelte";
import { ROOT } from "./toast-provider.selectors.js";

describe("ToastProvider", () => {
  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(ToastProvider);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-toasts-container` class", () => {
      const { getBySelector } = render(ToastProvider);

      expect(getBySelector(ROOT)).toHaveClass("proi-toasts-container");
    });

    describe("when `toast` store is set", () => {
      beforeEach(() => {
        toast.set({ variant: "success", title: "Title", description: "" });
      });

      it("should contain `1` child", () => {
        const { getBySelector } = render(ToastProvider);

        expect(getBySelector(ROOT).childElementCount).toBe(1);
      });

      it("should be an empty dom element after 3000ms", async () => {
        const { getBySelector } = render(ToastProvider);

        await waitFor(
          () => {
            expect(getBySelector(ROOT).childElementCount).toBe(0);
          },
          { timeout: 3000 }
        );
      });
    });
  });
});
