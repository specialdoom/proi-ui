import { describe } from "vitest";
import Avatar from "../Avatar.svelte";
import type { AvatarVariant } from "../avatar.types";
import { render } from "./avatar.queries";

describe("Avatar", () => {
  const avatarVariants: AvatarVariant[] = [
    "pine",
    "tufts",
    "neutral",
    "vivid",
    "flame",
    "mikado"
  ];

  describe("root element", () => {
    it("should be present", () => {
      const { getRoot } = render(Avatar);

      expect(getRoot()).toBeInTheDocument();
    });

    it("should contain `proi-avatar` class", () => {
      const { getRoot } = render(Avatar);

      expect(getRoot()).toHaveClass("proi-avatar");
    });

    it("should contain `data-display` class", () => {
      const { getRoot } = render(Avatar);

      expect(getRoot()).toHaveClass("data-display");
    });

    it("should contain `pine` class", () => {
      const { getRoot } = render(Avatar);

      expect(getRoot()).toHaveClass("pine");
    });
  });

  describe("when `initials` property", () => {
    describe("is set", () => {
      const initials = "PI";

      describe("and `image` property", () => {
        describe("is not set", () => {
          describe("root element", () => {
            it("should contain `initials` value as innerText", () => {
              const { getRoot } = render(Avatar, {
                props: {
                  initials
                }
              });

              expect(getRoot()).toHaveTextContent(initials);
            });
          });
        });

        describe("is set", () => {
          const image = "custom/url";

          describe("root element", () => {
            it("should contain empty innerText", () => {
              const { getRoot } = render(Avatar, {
                props: {
                  initials,
                  image
                }
              });

              expect(getRoot()).toHaveTextContent("");
            });

            it("should contain `background` inline style containing image", () => {
              const { getRoot } = render(Avatar, {
                props: {
                  initials,
                  image
                }
              });

              expect(getRoot()).toHaveStyle(
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
            const { getRoot } = render(Avatar);

            expect(getRoot()).toHaveTextContent("");
          });
        });
      });
    });
  });

  describe("when 'variant` property", () => {
    describe("root element", () => {
      avatarVariants.forEach((variant) => {
        it(`should contain \`${variant}\` class`, () => {
          const { getRoot } = render(Avatar, {
            props: {
              variant
            }
          });

          expect(getRoot()).toHaveClass(variant);
        });
      });
    });
  });

  describe("when `image` property", () => {
    describe("is set", () => {
      const image = "custom/url";

      describe("root element", () => {
        it("should contain `background` inline style", () => {
          const { getRoot } = render(Avatar, {
            props: {
              image
            }
          });

          expect(getRoot()).toHaveStyle(
            `background: url(${image}) center center/50px 50px no-repeat;`
          );
        });
      });
    });

    describe("is not set", () => {
      describe("root element", () => {
        it("should not contain `background` inline style", () => {
          const { getRoot } = render(Avatar);

          expect(getRoot()).not.toHaveStyle("background: url()");
        });
      });
    });
  });
});
