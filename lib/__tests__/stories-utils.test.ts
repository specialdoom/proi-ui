import { describe } from "vitest";
import { capitalizeFirstLetter } from "../__stories__/utils.js";

describe("stories-utils", () => {
  describe("capitalizeFirstLetter", () => {
    it('should return empty string if param is ""', () => {
      const value = capitalizeFirstLetter("");

      expect(value).toBe("");
    });

    it("should return empty string if param is null", () => {
      const value = capitalizeFirstLetter(null);

      expect(value).toBe("");
    });

    it("should return empty string if param is undefined", () => {
      const value = capitalizeFirstLetter(undefined);

      expect(value).toBe("");
    });

    it("should return param with first letter capitalized", () => {
      const value = capitalizeFirstLetter("test");

      expect(value).toBe("Test");
    });
  });
});
