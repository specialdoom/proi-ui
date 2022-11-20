import type { FeedbackIconsMap } from "./types.js";
import CheckIcon from "../icons/CheckIcon.svelte";
import StopIcon from "../icons/StopIcon.svelte";
import InfoIcon from "../icons/InfoIcon.svelte";
import WarningIcon from "../icons/WarningIcon.svelte";

export const feedbackIconsMap: FeedbackIconsMap = {
  success: CheckIcon,
  error: StopIcon,
  info: InfoIcon,
  warning: WarningIcon
};

export function getFeedbackIcon(props) {
  return feedbackIconsMap[props.variant];
}
