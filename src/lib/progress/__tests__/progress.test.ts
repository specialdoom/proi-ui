import { describe } from "vitest";
import { render } from "../../../__tests__/tests.queries.js";
import { PROGRESS_LINE, ROOT } from "./progress.selectors.js";
import Progress from "../Progress.svelte";

describe("Progress", () => {
  describe("root element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Progress);

      expect(getBySelector(ROOT)).toBeInTheDocument();
    });

    it("should contain `proi-progress` class", () => {
      const { getBySelector } = render(Progress);

      expect(getBySelector(ROOT)).toHaveClass("proi-progress");
    });
  });

  describe("progress line element", () => {
    it("should be in the document", () => {
      const { getBySelector } = render(Progress);

      expect(getBySelector(PROGRESS_LINE)).toBeInTheDocument();
    });

    it("should contain `proi-progress-line` class", () => {
      const { getBySelector } = render(Progress);

      expect(getBySelector(PROGRESS_LINE)).toHaveClass("proi-progress-line");
    });
  });

  describe("when `percent` property", () => {
    describe("is less than 100", () => {
      const percent = 85;

      describe("and `indeterminate` property", () => {
        describe("is set to `false", () => {
          const indeterminate = false;

          describe("progress line element", () => {
            it("should contain inline style for `width` property", () => {
              const { getBySelector } = render(Progress, {
                props: {
                  percent,
                  indeterminate
                }
              });

              expect(getBySelector(PROGRESS_LINE)).toHaveStyle("width: 85%;");
            });
          });
        });

        describe("is set to `true`", () => {
          const indeterminate = true;

          describe("progress line element", () => {
            it("should contain inline style for `width` property", () => {
              const { getBySelector } = render(Progress, {
                props: {
                  percent,
                  indeterminate
                }
              });

              expect(getBySelector(PROGRESS_LINE)).toHaveStyle("width: 100%;");
            });
          });
        });
      });
    });

    describe("is 100", () => {
      const percent = 100;

      describe("and `indeterminate` property", () => {
        describe("is set to `false", () => {
          const indeterminate = false;

          describe("progress line element", () => {
            it("should contain inline style for `width` property", () => {
              const { getBySelector } = render(Progress, {
                props: {
                  percent,
                  indeterminate
                }
              });

              expect(getBySelector(PROGRESS_LINE)).toHaveStyle("width: 100%;");
            });

            it("should contain `completed` class", () => {
              const { getBySelector } = render(Progress, {
                props: {
                  percent,
                  indeterminate
                }
              });

              expect(getBySelector(PROGRESS_LINE)).toHaveClass("completed");
            });
          });
        });

        describe("is set to `true`", () => {
          const indeterminate = true;

          describe("progress line element", () => {
            it("should contain inline style for `width` property", () => {
              const { getBySelector } = render(Progress, {
                props: {
                  percent,
                  indeterminate
                }
              });

              expect(getBySelector(PROGRESS_LINE)).toHaveStyle("width: 100%;");
            });
          });
        });
      });
    });

    describe("is 0", () => {
      const percent = 0;

      describe("and `indeterminate` property", () => {
        describe("is set to `false", () => {
          const indeterminate = false;

          describe("progress line element", () => {
            it("should contain inline style for `width` property", () => {
              const { getBySelector } = render(Progress, {
                props: {
                  percent,
                  indeterminate
                }
              });

              expect(getBySelector(PROGRESS_LINE)).toHaveStyle("width: 0%;");
            });
          });
        });

        describe("is set to `true`", () => {
          const indeterminate = true;

          describe("progress line element", () => {
            it("should contain inline style for `width` property", () => {
              const { getBySelector } = render(Progress, {
                props: {
                  percent,
                  indeterminate
                }
              });

              expect(getBySelector(PROGRESS_LINE)).toHaveStyle("width: 100%;");
            });
          });
        });
      });
    });
  });

  describe("when `error` property", () => {
    describe("is set to `true`", () => {
      const error = true;

      describe("progress line element", () => {
        it("should contain `error` class", () => {
          const { getBySelector } = render(Progress, {
            props: {
              error
            }
          });

          expect(getBySelector(PROGRESS_LINE)).toHaveClass("error");
        });
      });
    });

    describe("is set to `false`", () => {
      const error = false;

      describe("progress line element", () => {
        it("should not contain `error` class", () => {
          const { getBySelector } = render(Progress, {
            props: {
              error
            }
          });

          expect(getBySelector(PROGRESS_LINE)).not.toHaveClass("error");
        });
      });
    });
  });

  describe("when `indeterminate` property", () => {
    describe("is set to `true`", () => {
      const indeterminate = true;

      describe("progress line element", () => {
        it("should contain `indeterminate` class", () => {
          const { getBySelector } = render(Progress, {
            props: {
              indeterminate
            }
          });

          expect(getBySelector(PROGRESS_LINE)).toHaveClass("indeterminate");
        });
      });
    });

    describe("is set to `false`", () => {
      const indeterminate = false;

      describe("progress line element", () => {
        it("should not contain `indeterminate` class", () => {
          const { getBySelector } = render(Progress, {
            props: {
              indeterminate
            }
          });

          expect(getBySelector(PROGRESS_LINE)).not.toHaveClass("indeterminate");
        });
      });
    });
  });

  describe("when `small` property", () => {
    describe("is set to `true`", () => {
      const small = true;

      describe("root element", () => {
        it("should contain `small` class", () => {
          const { getBySelector } = render(Progress, {
            props: {
              small
            }
          });

          expect(getBySelector(ROOT)).toHaveClass("small");
        });
      });
    });

    describe("is set to `false`", () => {
      const small = false;

      describe("root element", () => {
        it("should not contain `small` class", () => {
          const { getBySelector } = render(Progress, {
            props: {
              small
            }
          });

          expect(getBySelector(ROOT)).not.toHaveClass("small");
        });
      });
    });
  });
});
