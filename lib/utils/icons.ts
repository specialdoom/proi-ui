import type { Constructor, FeedbackVariant, IconsMap } from "./types.js";
import CheckIcon from "../icons/CheckIcon.svelte";
import StopIcon from "../icons/StopIcon.svelte";
import InfoIcon from "../icons/InfoIcon.svelte";
import WarningIcon from "../icons/WarningIcon.svelte";
import type { SvelteComponent } from "svelte";

export const feedbackIconsMap: IconsMap = {
  success: CheckIcon,
  error: StopIcon,
  info: InfoIcon,
  warning: WarningIcon
};

export function getFeedbackIcon(props: {
  variant: FeedbackVariant;
}): Constructor<SvelteComponent> {
  return feedbackIconsMap[props.variant];
}
