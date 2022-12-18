import { fireEvent } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import { render } from "../../__tests__/tests.queries.js";
import type { AlertVariant } from "../alert.types";
import {
  ALERT,
  ALERT_CLOSE_ICON,
  ALERT_DESCRIPTION,
  ALERT_ICON,
  ALERT_TITLE,
  ROOT
} from "./alert.selectors.js";
import FakeAlert from "./FakeAlert.svelte";
import Alert from "../Alert.svelte";

describe("Alert", () => {
  const title = "Title";
  const alertVariants: AlertVariant[] = ["success", "info", "warning", "error"];

  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Alert, {
        props: {
          title
        }
      });

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-alert-container` class", () => {
      const { getBySelector } = render(Alert, {
        props: {
          title
        }
      });

      expect(getBySelector(ROOT)).toHaveClass("proi-alert-container");
    });

    it("should contain `success` class by default", () => {
      const { getBySelector } = render(Alert, {
        props: {
          title
        }
      });

      expect(getBySelector(ROOT)).toHaveClass("success");
    });
  });

  describe("alert element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Alert, {
        props: {
          title
        }
      });

      expect(getBySelector(ALERT)).toBeInTheDocument();
    });

    it("should contain `proi-alert` class", () => {
      const { getBySelector } = render(Alert, {
        props: {
          title
        }
      });

      expect(getBySelector(ALERT)).toHaveClass("proi-alert");
    });
  });

  describe("alert icon element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Alert, {
        props: {
          title
        }
      });

      expect(getBySelector(ALERT_ICON)).toBeInTheDocument();
    });

    it("should contain `proi-alert-icon` class", () => {
      const { getBySelector } = render(Alert, {
        props: {
          title
        }
      });

      expect(getBySelector(ALERT_ICON)).toHaveClass("proi-alert-icon");
    });
  });

  describe("alert title element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Alert, {
        props: {
          title
        }
      });

      expect(getBySelector(ALERT_TITLE)).toBeInTheDocument();
    });

    it("should contain `proi-alert-title` class", () => {
      const { getBySelector } = render(Alert, {
        props: {
          title
        }
      });

      expect(getBySelector(ALERT_TITLE)).toHaveClass("proi-alert-title");
    });
  });

  describe("when `variant` property", () => {
    describe("root element", () => {
      alertVariants.forEach((variant) => {
        it(`should contain \`${variant}\` class`, () => {
          const { getBySelector } = render(Alert, {
            props: {
              title,
              variant
            }
          });

          expect(getBySelector(ROOT)).toHaveClass(variant);
        });
      });
    });

    describe("alert icon element", () => {
      alertVariants.forEach((variant) => {
        it(`should contain \`${variant}\` svg specific icon`, () => {
          const { getBySelector } = render(Alert, {
            props: {
              title,
              variant
            }
          });

          expect(getBySelector(ALERT_ICON)).toContainHTML(`<svg class=${variant}-icon`);
        });
      });
    });
  });

  describe("when `title` property", () => {
    describe("alert title property", () => {
      it("should contain `title` value as innerText", () => {
        const { getBySelector } = render(Alert, {
          props: {
            title
          }
        });

        expect(getBySelector(ALERT_TITLE)).toHaveTextContent(title);
      });
    });
  });

  describe("when `closable` property", () => {
    describe("is set to `true`", () => {
      const closable = true;

      describe("alert close icon element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Alert, {
            props: {
              title,
              closable
            }
          });

          expect(getBySelector(ALERT_CLOSE_ICON)).toBeInTheDocument();
        });

        it("should containt `proi-alert-close-icon` element", () => {
          const { getBySelector } = render(Alert, {
            props: {
              title,
              closable
            }
          });

          expect(getBySelector(ALERT_CLOSE_ICON)).toHaveClass("proi-alert-close-icon");
        });

        describe("on `click` event", () => {
          describe("root element", () => {
            it("should not be in the document", async () => {
              const { getBySelector } = render(Alert, {
                props: {
                  title,
                  closable
                }
              });

              await fireEvent.click(getBySelector(ALERT_CLOSE_ICON));

              expect(() => getBySelector(ROOT)).toThrowError("Unable to find element");
            });
          });
        });
      });
    });

    describe("is set to `false`", () => {
      const closable = false;

      describe("alert close icon element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(Alert, {
            props: {
              title,
              closable
            }
          });

          expect(() => getBySelector(ALERT_CLOSE_ICON)).toThrowError(
            "Unable to find element"
          );
        });
      });
    });
  });

  describe("when default `slot`", () => {
    describe("is set", () => {
      describe("alert description element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(FakeAlert, {
            props: {
              props: {
                title
              },
              slot: "test"
            }
          });

          expect(getBySelector(ALERT_DESCRIPTION)).toBeInTheDocument();
        });

        it("should contain `proi-alert-description` class", () => {
          const { getBySelector } = render(FakeAlert, {
            props: {
              props: {
                title
              },
              slot: "test"
            }
          });

          expect(getBySelector(ALERT_DESCRIPTION)).toHaveClass("proi-alert-description");
        });

        it("should contain default `slot` content as innerHTML", () => {
          const { getBySelector } = render(FakeAlert, {
            props: {
              props: {
                title
              },
              slot: "test"
            }
          });

          expect(getBySelector(ALERT_DESCRIPTION)).toContainHTML("test");
        });
      });
    });
  });
});
