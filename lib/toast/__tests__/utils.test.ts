import { get } from "svelte/store";
import { describe, vi } from "vitest";
import { toast } from "../store/toast.js";
import { send, error, success, info, warning } from "../utils";

describe("toast/utils", () => {
  const variant = "success";
  const title = "title";
  const description = "description";

  describe("send", () => {
    it("should set the toast store with sent slice", () => {
      send({ variant, title, description });

      expect(get(toast).title).toBe(title);
      expect(get(toast).description).toBe(description);
      expect(get(toast).variant).toBe(variant);
    });
  });

  describe("error", () => {
    it("should set the toast store with an error slice containing the details sent", () => {
      error(title, description);

      expect(get(toast).title).toBe(title);
      expect(get(toast).description).toBe(description);
      expect(get(toast).variant).toBe("error");
    });
  });

  describe("success", () => {
    it("should set the toast store with an success slice containing the details sent", () => {
      success(title, description);

      expect(get(toast).title).toBe(title);
      expect(get(toast).description).toBe(description);
      expect(get(toast).variant).toBe("success");
    });
  });

  describe("warning", () => {
    it("should set the toast store with an warning slice containing the details sent", () => {
      warning(title, description);

      expect(get(toast).title).toBe(title);
      expect(get(toast).description).toBe(description);
      expect(get(toast).variant).toBe("warning");
    });
  });

  describe("info", () => {
    it("should set the toast store with an info slice containing the details sent", () => {
      info(title, description);

      expect(get(toast).title).toBe(title);
      expect(get(toast).description).toBe(description);
      expect(get(toast).variant).toBe("info");
    });
  });
});
