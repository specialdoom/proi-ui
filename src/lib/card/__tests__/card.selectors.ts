/** Component's element(s) selector(s) */
export const ROOT = ":scope > div > div";
export const IMAGE = `${ROOT} > .proi-card-image`;
export const TITLE = `${ROOT} > h2`;
export const DESCRIPTION = `${ROOT} > .proi-card-description`;
export const ACTIONS_CONTAINER = `${ROOT} > .proi-card-actions`;
export const ACTION_BUTTON = `${ACTIONS_CONTAINER}  > button:nth-child(1)`;
export const CANCEL_BUTTON = `${ACTIONS_CONTAINER}  > button:nth-child(2)`;
