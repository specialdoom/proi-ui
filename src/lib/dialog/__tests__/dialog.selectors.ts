/** Component's element(s) selector(s) */
export const ROOT = ":scope > div > div";
export const DIALOG = `${ROOT} > div`;
export const DIALOG_HEADER = `${DIALOG} > .proi-dialog-header`;
export const DIALOG_CLOSE_ICON = `${DIALOG_HEADER} > .proi-icon-button`;
export const DIALOG_BODY = `${DIALOG} > .proi-dialog-body`;
export const DIALOG_FOOTER = `${DIALOG} > .proi-dialog-footer`;
export const DIALOG_CANCEL_BUTTON = `${DIALOG_FOOTER} > button:nth-child(1)`;
export const DIALOG_OK_BUTTON = `${DIALOG_FOOTER} > button:nth-child(2)`;
