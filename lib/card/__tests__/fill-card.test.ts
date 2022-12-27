import { describe } from "vitest";
import { render } from "../../__tests__/tests.queries.js";
import { TITLE, DESCRIPTION, ROOT } from "./fill-card.selectors.js";
import FillCard from "../FillCard.svelte";
import { dataDisplayVariants } from "../../__stories__/utils";

describe("FillCard", () => {
  describe("Card", () => {
    const title = "Title";
    const description = "Description";

    describe("root element", () => {
      it("should be in the document", () => {
        const { getBySelector } = render(FillCard, {
          props: {
            title,
            description
          }
        });

        expect(getBySelector(ROOT)).toBeInTheDocument();
      });

      it("should contain `proi-card` class", () => {
        const { getBySelector } = render(FillCard, {
          props: {
            title,
            description
          }
        });

        expect(getBySelector(ROOT)).toHaveClass("proi-card");
      });

      it("should contain `data-display` class", () => {
        const { getBySelector } = render(FillCard, {
          props: {
            title,
            description
          }
        });

        expect(getBySelector(ROOT)).toHaveClass("data-display");
      });
    });

    describe("title element", () => {
      it("should be in the document", () => {
        const { getBySelector } = render(FillCard, {
          props: {
            title,
            description
          }
        });

        expect(getBySelector(TITLE)).toBeInTheDocument();
      });

      it("should contain `proi-card-title` class", () => {
        const { getBySelector } = render(FillCard, {
          props: {
            title,
            description
          }
        });

        expect(getBySelector(TITLE)).toHaveClass("proi-card-title");
      });

      it("should contain `title` property as innerText", () => {
        const { getBySelector } = render(FillCard, {
          props: {
            title,
            description
          }
        });

        expect(getBySelector(TITLE)).toHaveTextContent(title);
      });
    });

    describe("description element", () => {
      it("should be in the document", () => {
        const { getBySelector } = render(FillCard, {
          props: {
            title,
            description
          }
        });

        expect(getBySelector(DESCRIPTION)).toBeInTheDocument();
      });

      it("should contain `proi-card-description` class", () => {
        const { getBySelector } = render(FillCard, {
          props: {
            title,
            description
          }
        });

        expect(getBySelector(DESCRIPTION)).toHaveClass("proi-card-description");
      });

      it("should contain `description` property as innerText", () => {
        const { getBySelector } = render(FillCard, {
          props: {
            title,
            description
          }
        });

        expect(getBySelector(DESCRIPTION)).toHaveTextContent(description);
      });
    });

    describe("when `variant` property", () => {
      dataDisplayVariants.forEach((variant) => {
        describe("root element", () => {
          it(`should contain \`${variant}\` class`, () => {
            const { getBySelector } = render(FillCard, {
              props: {
                title,
                description,
                variant
              }
            });

            expect(getBySelector(ROOT)).toHaveClass(variant);
          });
        });
      });
    });
  });
});
