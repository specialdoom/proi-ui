import { fireEvent } from "@testing-library/dom";
import { describe, expect, it } from "vitest";
import Alert from "../Alert.svelte";
import type { AlertVariant } from "../alert.types";
import { render } from "./alert.queries.js";
import FakeAlert from "./FakeAlert.svelte";

describe("Alert", () => {
  const title = "Title";
  const alertVariants: AlertVariant[] = ["success", "info", "warning", "error"];

  describe("root element", () => {
    it("should be present", () => {
      const { getRoot } = render(Alert, {
        props: {
          title
        }
      });

      expect(getRoot()).toBeInTheDocument();
    });

    it("should contain `proi-alert-container` class", () => {
      const { getRoot } = render(Alert, {
        props: {
          title
        }
      });

      expect(getRoot()).toHaveClass("proi-alert-container");
    });

    it("should contain `success` class", () => {
      const { getRoot } = render(Alert, {
        props: {
          title
        }
      });

      expect(getRoot()).toHaveClass("success");
    });
  });

  describe("alert element", () => {
    it("should be present", () => {
      const { getAlert } = render(Alert, {
        props: {
          title
        }
      });

      expect(getAlert()).toBeInTheDocument();
    });

    it("should contain `proi-alert` class", () => {
      const { getAlert } = render(Alert, {
        props: {
          title
        }
      });

      expect(getAlert()).toHaveClass("proi-alert");
    });
  });

  describe("alert icon element", () => {
    it("should be present", () => {
      const { getAlertIcon } = render(Alert, {
        props: {
          title
        }
      });

      expect(getAlertIcon()).toBeInTheDocument();
    });

    it("should contain `proi-alert-icon` class", () => {
      const { getAlertIcon } = render(Alert, {
        props: {
          title
        }
      });

      expect(getAlertIcon()).toHaveClass("proi-alert-icon");
    });
  });

  describe("alert title element", () => {
    it("should be present", () => {
      const { getAlertTitle } = render(Alert, {
        props: {
          title
        }
      });

      expect(getAlertTitle()).toBeInTheDocument();
    });

    it("should contain `proi-alert-title` class", () => {
      const { getAlertTitle } = render(Alert, {
        props: {
          title
        }
      });

      expect(getAlertTitle()).toHaveClass("proi-alert-title");
    });
  });

  describe("when `variant` property", () => {
    describe("root element", () => {
      alertVariants.forEach((variant) => {
        it(`should contain \`${variant}\` class`, () => {
          const { getRoot } = render(Alert, {
            props: {
              title,
              variant
            }
          });

          expect(getRoot()).toHaveClass(variant);
        });
      });
    });

    describe("alert icon element", () => {
      alertVariants.forEach((variant) => {
        it(`should contain \`${variant}\` svg specific icon`, () => {
          const { getAlertIcon } = render(Alert, {
            props: {
              title,
              variant
            }
          });

          expect(getAlertIcon()).toContainHTML(`<svg class=${variant}-icon`);
        });
      });
    });
  });

  describe("when `title` property", () => {
    describe("alert title property", () => {
      it("should contain `title` value as innerText", () => {
        const { getAlertTitle } = render(Alert, {
          props: {
            title
          }
        });

        expect(getAlertTitle()).toHaveTextContent(title);
      });
    });
  });

  describe("when `closable` property", () => {
    describe("is set to `true`", () => {
      const closable = true;

      describe("alert close icon element", () => {
        it("should be present", () => {
          const { getAlertCloseIcon } = render(Alert, {
            props: {
              title,
              closable
            }
          });

          expect(getAlertCloseIcon()).toBeInTheDocument();
        });

        it("should containt `proi-alert-close-icon` element", () => {
          const { getAlertCloseIcon } = render(Alert, {
            props: {
              title,
              closable
            }
          });

          expect(getAlertCloseIcon()).toHaveClass("proi-alert-close-icon");
        });

        describe("on `click` event", () => {
          describe("root element", () => {
            it("should not be present", async () => {
              const { getAlertCloseIcon, getRoot } = render(Alert, {
                props: {
                  title,
                  closable
                }
              });

              await fireEvent.click(getAlertCloseIcon());

              expect(() => getRoot()).toThrowError();
            });
          });
        });
      });
    });

    describe("is set to `false`", () => {
      const closable = false;

      describe("alert close icon element", () => {
        it("should not be present", () => {
          const { getAlertCloseIcon } = render(Alert, {
            props: {
              title,
              closable
            }
          });

          expect(() => getAlertCloseIcon()).toThrowError();
        });
      });
    });
  });

  describe("when default `slot`", () => {
    describe("is set", () => {
      describe("alert description element", () => {
        it("should be present", () => {
          const { getAlertDescription } = render(FakeAlert, {
            props: {
              props: {
                title
              },
              slot: "test"
            }
          });

          expect(getAlertDescription()).toBeInTheDocument();
        });

        it("should contain `proi-alert-description` class", () => {
          const { getAlertDescription } = render(FakeAlert, {
            props: {
              props: {
                title
              },
              slot: "test"
            }
          });

          expect(getAlertDescription()).toHaveClass("proi-alert-description");
        });

        it("should contain default `slot` content as innerHTML", () => {
          const { getAlertDescription } = render(FakeAlert, {
            props: {
              props: {
                title
              },
              slot: "test"
            }
          });

          expect(getAlertDescription()).toContainHTML("test");
        });
      });
    });
  });
});
