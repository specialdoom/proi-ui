import { describe } from "vitest";
import { render } from "../../__tests__/tests.queries.js";
import { ROOT } from "./avatar.selectors.js";
import Avatar from "../Avatar.svelte";
import { dataDisplayVariants } from "../../__stories__/utils.js";

describe("Avatar", () => {
  const avatarVariants = dataDisplayVariants;

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Avatar);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-avatar` class", () => {
      const { getBySelector } = render(Avatar);

      expect(getBySelector(ROOT)).toHaveClass("proi-avatar");
    });

    it("should contain `data-display` class", () => {
      const { getBySelector } = render(Avatar);

      expect(getBySelector(ROOT)).toHaveClass("data-display");
    });

    it("should contain `pine` class", () => {
      const { getBySelector } = render(Avatar);

      expect(getBySelector(ROOT)).toHaveClass("pine");
    });
  });

  describe("when `initials` property", () => {
    describe("is set", () => {
      const initials = "PI";

      describe("and `image` property", () => {
        describe("is not set", () => {
          describe("root element", () => {
            it("should contain `initials` value as innerText", () => {
              const { getBySelector } = render(Avatar, {
                props: {
                  initials
                }
              });

              expect(getBySelector(ROOT)).toHaveTextContent(initials);
            });
          });
        });

        describe("is set", () => {
          const image = "custom/url";

          describe("root element", () => {
            it("should contain empty innerText", () => {
              const { getBySelector } = render(Avatar, {
                props: {
                  initials,
                  image
                }
              });

              expect(getBySelector(ROOT)).toHaveTextContent("");
            });

            it("should contain `background` inline style containing image", () => {
              const { getBySelector } = render(Avatar, {
                props: {
                  initials,
                  image
                }
              });

              expect(getBySelector(ROOT)).toHaveStyle(
                `background: url(${image}) center center/50px 50px no-repeat;`
              );
            });
          });
        });
      });
    });

    describe("is not set", () => {
      describe("root element", () => {
        it("should contain empty innerText", () => {
          it("should contain `initials` value as innerText", () => {
            const { getBySelector } = render(Avatar);

            expect(getBySelector(ROOT)).toHaveTextContent("");
          });
        });
      });
    });
  });

  describe("when 'variant` property", () => {
    describe("root element", () => {
      avatarVariants.forEach((variant) => {
        it(`should contain \`${variant}\` class`, () => {
          const { getBySelector } = render(Avatar, {
            props: {
              variant
            }
          });

          expect(getBySelector(ROOT)).toHaveClass(variant);
        });
      });
    });
  });

  describe("when `image` property", () => {
    describe("is set", () => {
      const image = "custom/url";

      describe("root element", () => {
        it("should contain `background` inline style", () => {
          const { getBySelector } = render(Avatar, {
            props: {
              image
            }
          });

          expect(getBySelector(ROOT)).toHaveStyle(
            `background: url(${image}) center center/50px 50px no-repeat;`
          );
        });
      });
    });

    describe("is not set", () => {
      describe("root element", () => {
        it("should not contain `background` inline style", () => {
          const { getBySelector } = render(Avatar);

          expect(getBySelector(ROOT)).not.toHaveStyle("background: url()");
        });
      });
    });
  });
});
