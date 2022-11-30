import { describe, it } from "vitest";
import { render } from "../../__tests__/tests.queries.js";
import { ROOT } from "./backdrop.selectors.js";
import Backdrop from "../Backdrop.svelte";
import FakeBackdrop from "./FakeBackdrop.svelte";

describe("Backdrop", () => {
  describe("when `visible` property", () => {
    describe("is set to `true`", () => {
      const visible = true;

      describe("root element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Backdrop, {
            props: {
              visible
            }
          });

          expect(getBySelector(ROOT)).toBeInTheDocument();
        });

        it("should contain `proi-backdrop` class", () => {
          const { getBySelector } = render(Backdrop, {
            props: {
              visible
            }
          });

          expect(getBySelector(ROOT)).toHaveClass("proi-backdrop");
        });

        describe("and default `slot` is set", () => {
          const slot = "test";

          it("should contain default `slot` as innerHTML", () => {
            const { getBySelector } = render(FakeBackdrop, {
              props: {
                props: {
                  visible
                },
                slot
              }
            });
            expect(getBySelector(ROOT)).toContainHTML(`${slot}`);
          });
        });
      });
    });

    describe("is set to `false`", () => {
      const visible = false;

      describe("root element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(Backdrop, {
            props: {
              visible
            }
          });

          expect(() => getBySelector(ROOT)).toThrowError();
        });
      });
    });
  });
});
