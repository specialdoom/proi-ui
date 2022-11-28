import { describe, it } from "vitest";
import Backdrop from "../Backdrop.svelte";
import { render } from "./backdrop.queries.js";
import FakeBackdrop from "./FakeBackdrop.svelte";

describe("Backdrop", () => {
  describe("when `visible` property", () => {
    describe("is set to `true`", () => {
      const visible = true;

      describe("root element", () => {
        it("should be in the document", () => {
          const { getRoot } = render(Backdrop, {
            props: {
              visible
            }
          });

          expect(getRoot()).toBeInTheDocument();
        });

        it("should contain `proi-backdrop` class", () => {
          const { getRoot } = render(Backdrop, {
            props: {
              visible
            }
          });

          expect(getRoot()).toHaveClass("proi-backdrop");
        });

        describe("and default `slot` is set", () => {
          const slot = "test";

          it("should contain default `slot` as innerHTML", () => {
            const { getRoot } = render(FakeBackdrop, {
              props: {
                props: {
                  visible
                },
                slot
              }
            });
            expect(getRoot()).toContainHTML(`${slot}`);
          });
        });
      });
    });

    describe("is set to `false`", () => {
      const visible = false;

      describe("root element", () => {
        it("should not be in the document", () => {
          const { getRoot } = render(Backdrop, {
            props: {
              visible
            }
          });

          expect(() => getRoot()).toThrowError();
        });
      });
    });
  });
});
