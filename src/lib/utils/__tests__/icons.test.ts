import { describe } from "vitest";
import { feedbackIconsMap, getFeedbackIcon } from "../icons.js";
import type { FeedbackVariant } from "../types.js";

describe("utils/icons", () => {
  describe("getFeedbackIcon", () => {
    const variants: FeedbackVariant[] = ["success", "error", "info", "warning"];

    variants.forEach((variant) => {
      it("should return correct svelte component", () => {
        expect(getFeedbackIcon({ variant })).toBe(feedbackIconsMap[variant]);
      });
    });
  });
});
