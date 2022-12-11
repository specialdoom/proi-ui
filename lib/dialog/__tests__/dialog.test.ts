import { describe, vi } from "vitest";
import { fireEvent, render } from "../../__tests__/tests.queries.js";
import {
  DIALOG,
  DIALOG_BODY,
  DIALOG_CANCEL_BUTTON,
  DIALOG_CLOSE_ICON,
  DIALOG_CONTAINER,
  DIALOG_FOOTER,
  DIALOG_HEADER,
  DIALOG_OK_BUTTON,
  ROOT
} from "./dialog.selectors.js";
import Dialog from "../Dialog.svelte";
import FakeDialog from "./FakeDialog.svelte";

describe("Dialog", () => {
  describe("when `visible` property", () => {
    describe("is set to `true`", () => {
      const visible = true;

      describe("root element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Dialog, {
            props: {
              visible
            }
          });

          expect(getBySelector(ROOT)).toBeInTheDocument();
        });

        it("should contain `proi-backdrop` class", () => {
          const { getBySelector } = render(Dialog, {
            props: {
              visible
            }
          });

          expect(getBySelector(ROOT)).toHaveClass("proi-backdrop");
        });
      });

      describe("dialog container element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Dialog, {
            props: {
              visible
            }
          });

          expect(getBySelector(DIALOG_CONTAINER)).toBeInTheDocument();
        });

        it("should contain `proi-dialog-container` class", () => {
          const { getBySelector } = render(Dialog, {
            props: {
              visible
            }
          });

          expect(getBySelector(DIALOG_CONTAINER)).toHaveClass("proi-dialog-container");
        });
      });

      describe("dialog element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Dialog, {
            props: {
              visible
            }
          });

          expect(getBySelector(DIALOG)).toBeInTheDocument();
        });

        it("should contain `proi-dialog` class", () => {
          const { getBySelector } = render(Dialog, {
            props: {
              visible
            }
          });

          expect(getBySelector(DIALOG)).toHaveClass("proi-dialog");
        });
      });

      describe("dialog header element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Dialog, {
            props: {
              visible
            }
          });

          expect(getBySelector(DIALOG_HEADER)).toBeInTheDocument();
        });

        it("should contain `proi-dialog-header` class", () => {
          const { getBySelector } = render(Dialog, {
            props: {
              visible
            }
          });

          expect(getBySelector(DIALOG_HEADER)).toHaveClass("proi-dialog-header");
        });
      });

      describe("dialog close icon element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Dialog, {
            props: {
              visible
            }
          });

          expect(getBySelector(DIALOG_CLOSE_ICON)).toBeInTheDocument();
        });
      });

      describe("dialog body element", () => {
        it("should be in the document", () => {
          const { getBySelector } = render(Dialog, {
            props: {
              visible
            }
          });

          expect(getBySelector(DIALOG_BODY)).toBeInTheDocument();
        });

        it("should contain `proi-dialog-body` class", () => {
          const { getBySelector } = render(Dialog, {
            props: {
              visible
            }
          });

          expect(getBySelector(DIALOG_BODY)).toHaveClass("proi-dialog-body");
        });
      });

      describe("and `title` property", () => {
        describe("is set", () => {
          const title = "title";

          describe("dialog header element", () => {
            it("should contain inline style `justify-content` property set to `space-between`", () => {
              const { getBySelector } = render(Dialog, {
                props: {
                  title,
                  visible
                }
              });

              expect(getBySelector(DIALOG_HEADER)).toHaveStyle(
                "justify-content: space-between;"
              );
            });

            it("should contain `title` property as innerText", () => {
              const { getBySelector } = render(Dialog, {
                props: {
                  title,
                  visible
                }
              });

              expect(getBySelector(DIALOG_HEADER)).toHaveTextContent(title);
            });
          });
        });

        describe("is not set", () => {
          describe("dialog header element", () => {
            it("should contain inline style `justify-content` property set to `flex-end`", () => {
              const { getBySelector } = render(Dialog, {
                props: {
                  visible
                }
              });

              expect(getBySelector(DIALOG_HEADER)).toHaveStyle(
                "justify-content: flex-end;"
              );
            });

            it("should contain empty string as innerText", () => {
              const { getBySelector } = render(Dialog, {
                props: {
                  visible
                }
              });

              expect(getBySelector(DIALOG_HEADER)).toHaveTextContent("");
            });
          });
        });
      });

      describe("and `showActions` property", () => {
        describe("is set to `true`", () => {
          const showActions = true;

          describe("dialog footer element", () => {
            it("should be in the document", () => {
              const { getBySelector } = render(Dialog, {
                props: {
                  visible,
                  showActions
                }
              });

              expect(getBySelector(DIALOG_FOOTER)).toBeInTheDocument();
            });

            it("should contain `proi-dialog-footer` class", () => {
              const { getBySelector } = render(Dialog, {
                props: {
                  visible,
                  showActions
                }
              });

              expect(getBySelector(DIALOG_FOOTER)).toHaveClass("proi-dialog-footer");
            });
          });

          describe("dialog ok button element", () => {
            it("should be in the document", () => {
              const { getBySelector } = render(Dialog, {
                props: {
                  visible,
                  showActions
                }
              });

              expect(getBySelector(DIALOG_OK_BUTTON)).toBeInTheDocument();
            });
          });

          describe("dialog cancel button element", () => {
            it("should be in the document", () => {
              const { getBySelector } = render(Dialog, {
                props: {
                  visible,
                  showActions
                }
              });

              expect(getBySelector(DIALOG_CANCEL_BUTTON)).toBeInTheDocument();
            });
          });

          describe("on ok button click", () => {
            it("should dispatch `ok` event", async () => {
              const mock = vi.fn();

              const { component, getBySelector } = render(Dialog, {
                props: {
                  visible,
                  showActions
                }
              });

              const okButtonElement = getBySelector(DIALOG_OK_BUTTON);

              component.$on("ok", mock);

              await fireEvent.click(okButtonElement);

              expect(mock).toHaveBeenCalled();
            });
          });

          describe("on cancel button click", () => {
            it("should dispatch `cancel` event", async () => {
              const mock = vi.fn();

              const { component, getBySelector } = render(Dialog, {
                props: {
                  visible,
                  showActions
                }
              });

              const cancelButtonElement = getBySelector(DIALOG_CANCEL_BUTTON);

              component.$on("cancel", mock);

              await fireEvent.click(cancelButtonElement);

              expect(mock).toHaveBeenCalled();
            });
          });

          describe("on close icon click", () => {
            it("should dispatch `cancel` event", async () => {
              const mock = vi.fn();

              const { component, getBySelector } = render(Dialog, {
                props: {
                  visible,
                  showActions
                }
              });

              const closeIconElement = getBySelector(DIALOG_CLOSE_ICON);

              component.$on("cancel", mock);

              await fireEvent.click(closeIconElement);

              expect(mock).toHaveBeenCalled();
            });
          });
        });

        describe("is set to `false`", () => {
          const showActions = false;

          describe("dialog footer element", () => {
            it("should not be in the document", () => {
              const { getBySelector } = render(Dialog, {
                props: {
                  visible,
                  showActions
                }
              });

              expect(() => getBySelector(DIALOG_FOOTER)).toThrowError(
                "Unable to find element"
              );
            });
          });
        });
      });

      describe("and default `slot`", () => {
        describe("is set", () => {
          const slot = "test";

          describe("dialog body element", () => {
            it("should contain default `slot` as innerHTML", () => {
              const { getBySelector } = render(FakeDialog, {
                props: {
                  props: {
                    visible
                  },
                  slot
                }
              });

              expect(getBySelector(DIALOG_BODY)).toContainHTML(slot);
            });
          });
        });

        describe("is not set", () => {
          describe("dialog body element", () => {
            it("should contain empty string as innerHTML", () => {
              const { getBySelector } = render(FakeDialog, {
                props: {
                  props: {
                    visible
                  }
                }
              });

              expect(getBySelector(DIALOG_BODY)).toContainHTML("");
            });
          });
        });
      });
    });

    describe("is set to `false`", () => {
      const visible = false;

      describe("root element", () => {
        it("should not be in the document", () => {
          const { getBySelector } = render(Dialog, {
            props: {
              visible
            }
          });

          expect(() => getBySelector("ROOT")).toThrowError("Unable to find element");
        });
      });
    });
  });
});
