import { getCustomRenderer } from "../../__tests__/custom-renderer.js";

export const ROOT = ":scope > div > div";
export const ALERT = `${ROOT} > .proi-alert`;
export const ALERT_ICON = `${ALERT} > .proi-alert-icon`;
export const ALERT_TITLE = `${ALERT} > .proi-alert-title`;
export const ALERT_CLOSE_ICON = `${ALERT} > .proi-alert-close-icon`;
export const ALERT_DESCRIPTION = `${ROOT} > .proi-alert-description`;

export * from "@testing-library/svelte";

export const render = getCustomRenderer({
  getRoot: {
    name: "root",
    selector: ROOT
  },
  getAlert: {
    name: "alert",
    selector: ALERT
  },
  getAlertIcon: {
    name: "alert-icon",
    selector: ALERT_ICON
  },
  getAlertTitle: {
    name: "alert-title",
    selector: ALERT_TITLE
  },
  getAlertDescription: {
    name: "alert-description",
    selector: ALERT_DESCRIPTION
  },
  getAlertCloseIcon: {
    name: "alert-close-icon",
    selector: ALERT_CLOSE_ICON
  }
});
