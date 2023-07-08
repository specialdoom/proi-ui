<script lang="ts">
  import type { ThemeType } from "./types.js";

  export let theme: ThemeType = "dark";

  $: if (typeof window !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
  }
</script>

<slot {theme} />

<style>
  :root {
    /* extended neutral */
    --n800: #000000;
    --n600: #5c5c5c;
    --n400: #adadad;
    --n200: #d6d6d6;
    --n0: #ffffff;

    /* extended green */
    --g800: #357266;
    --g600: #479a89;
    --g400: #73bfb0;
    --g200: #9dd2c7;
    --g0: #d5ece7;

    /* extended red */
    --r800: #b53c17;
    --r600: #e35226;
    --r400: #e86f4a;
    --r200: #f99c80;
    --r0: #ffc1ae;

    /* extended yellow */
    --y800: #cd9400;
    --y600: #ffc71f;
    --y400: #ffd147;
    --y200: #ffdb70;
    --y0: #ffe699;

    /* extended blue */
    --b800: #1a6fb6;
    --b600: #3993dd;
    --b400: #62aae4;
    --b200: #85bdea;
    --b0: #a8d0f0;

    /* extended purple */
    --p800: #690375;
    --p600: #873591;
    --p400: #a568ac;
    --p200: #c39ac8;
    --p0: #e1cde3;
  }

  /* light theme */
  :global([data-theme="light"]) {
    /** Background tokens */
    --pi-bg: var(--n0);
    --pi-bg-interactive: var(--b600);
    --pi-bg-interactive-subtle: var(--b400);
    --pi-bg-static: var(--n0);
    --pi-bg-hover: var(--n200);
    --pi-bg-inverse: var(--n800);
    --pi-bg-disabled: var(--n200);
    --pi-bg-error: var(--r600);

    /** Layer tokens */
    --pi-layer: var(--n0);

    /** Border tokens */
    --pi-border-interactive: var(--b400);
    --pi-border-subtle: var(--n600);
    --pi-border-disabled: var(--n400);
    --pi-border-error: var(--r600);
    --pi-border-inverse: var(--n800);

    /** Text tokens */
    --pi-text: var(--n800);
    --pi-text-placeholder: var(--n400);
    --pi-text-on-color: var(--n800);
    --pi-text-on-color-inverse: var(--n0);
    --pi-text-helper: var(--n600);
    --pi-text-error: var(--r600);
    --pi-text-disabled: var(--n400);
    --pi-text-inverse: var(--n0);

    /** Feedback tokens */
    --pi-success: var(--g0);
    --pi-success-02: var(--g800);
    --pi-success-text: var(--g800);
    --pi-error: var(--r0);
    --pi-error-02: var(--r800);
    --pi-error-text: var(--r800);
    --pi-info: var(--b0);
    --pi-info-02: var(--r600);
    --pi-info-text: var(--b800);
    --pi-warning: var(--y0);
    --pi-warning-02: var(--y600);
    --pi-warning-text: var(--y800);

    /** Focus tokens */
    --pi-focus: var(--b800);

    /** Color tokens */
    --pi-tufts: var(--b600);
    --pi-tufts-text: var(--n0);
    --pi-mikado: var(--y600);
    --pi-mikado-text: var(--n800);
    --pi-vivid: var(--p600);
    --pi-vivid-text: var(--n0);
    --pi-pine: var(--g600);
    --pi-pine-text: var(--n0);
    --pi-flame: var(--r600);
    --pi-flame-text: var(--n0);
    --pi-neutral: var(--n800);
    --pi-neutral-text: var(--n0);
    --pi-inverse: var(--n0);
    --pi-inverse-text: var(--n800);

    /** Icon tokens */
    --pi-icon: var(--n0);
    --pi-icon-disabled: var(--n400);
    --pi-icon-inverse: var(--n800);

    /* Link tokens */
    --pi-link-text: var(--b600);
    --pi-link-visited-text: var(--p600);
    --pi-link-active-text: var(--b600);

    /* component tokens */
    /* Button component */
    --pi-button-primary: var(--b600);
    --pi-button-primary-text: var(--n0);
    --pi-button-primary-hover: var(--b800);
    --pi-button-primary-active: var(--b400);
    --pi-button-primary-disabled: var(--n200);
    --pi-button-primary-disabled-color: var(--n0);
    --pi-button-outline: inherit;
    --pi-button-outline-text: var(--n800);
    --pi-button-outline-active: var(--n800);
    --pi-button-outline-active-text: var(--n0);
    --pi-button-secondary: var(--p600);
    --pi-button-secondary-text: var(--n0);
    --pi-button-secondary-hover: var(--p800);
    --pi-button-secondary-active: var(--p400);
    --pi-button-danger: var(--r600);
    --pi-button-danger-text: var(--n0);
    --pi-button-danger-hover: var(--r800);
    --pi-button-danger-active: var(--r400);

    /** Radio component */
    --pi-radio-bullet-subtle: var(--n0);

    /** Switch component */
    --pi-switch-bullet: var(--n0);
    --pi-switch-bullet-checked: var(--n0);
    --pi-switch-disabled: var(--n400);
    --pi-switch-bullet-disabled: var(--n400);

    /** Progress component */
    --pi-progress-complete: var(--g600);

    /* Link tokens */
    --pi-link-text: var(--b600);
    --pi-link-visited-text: var(--p600);
    --pi-link-active-text: var(--b600);

    /** Divider component */
    --pi-divider: var(--n600);

    /** Dialog component */
    --pi-dialog-box-shadow: 0px 4px 30px 0px rgba(16, 24, 64, 0.15);
  }

  /* dark theme */
  :global([data-theme="dark"]) {
    /** Background tokens */
    --pi-bg: var(--n800);
    --pi-bg-static: var(--n0);
    --pi-bg-interactive: var(--b600);
    --pi-bg-interactive-subtle: var(--b400);
    --pi-bg-hover: var(--n600);
    --pi-bg-inverse: var(--n0);
    --pi-bg-disabled: var(--n600);
    --pi-bg-error: var(--r600);

    /** Layer tokens */
    --pi-layer: var(--n800);

    /** Border tokens */
    --pi-border-interactive: var(--b400);
    --pi-border-subtle: var(--n200);
    --pi-border-disabled: var(--n400);
    --pi-border-error: var(--r600);
    --pi-border-inverse: var(--n0);

    /** Text tokens */
    --pi-text: var(--n0);
    --pi-text-placeholder: var(--n400);
    --pi-text-on-color: var(--n800);
    --pi-text-on-color-inverse: var(--n0);
    --pi-text-helper: var(--n400);
    --pi-text-error: var(--r600);
    --pi-text-disabled: var(--n400);
    --pi-text-inverse: var(--n800);

    /** Feedback tokens */
    --pi-success: var(--g0);
    --pi-success-02: var(--g800);
    --pi-success-text: var(--g800);
    --pi-error: var(--r0);
    --pi-error-02: var(--r800);
    --pi-error-text: var(--r800);
    --pi-info: var(--b0);
    --pi-info-02: var(--r600);
    --pi-info-text: var(--b800);
    --pi-warning: var(--y0);
    --pi-warning-02: var(--y600);
    --pi-warning-text: var(--y800);

    /** Focus tokens */
    --pi-focus: var(--b800);

    /** Color tokens */
    --pi-tufts: var(--b600);
    --pi-tufts-text: var(--n0);
    --pi-mikado: var(--y600);
    --pi-mikado-text: var(--n800);
    --pi-vivid: var(--p600);
    --pi-vivid-text: var(--n0);
    --pi-pine: var(--g600);
    --pi-pine-text: var(--n0);
    --pi-flame: var(--r600);
    --pi-flame-text: var(--n0);
    --pi-neutral: var(--n0);
    --pi-neutral-text: var(--n800);
    --pi-inverse: var(--n800);
    --pi-inverse-text: var(--n0);

    /** Icon tokens */
    --pi-icon: var(--n0);
    --pi-icon-disabled: var(--n400);
    --pi-icon-inverse: var(--n800);

    /* Link tokens */
    --pi-link-text: var(--b600);
    --pi-link-visited-text: var(--p600);
    --pi-link-active-text: var(--b600);

    /* component tokens */
    /* Button component */
    --pi-button-primary: var(--b600);
    --pi-button-primary-text: var(--n0);
    --pi-button-primary-hover: var(--b800);
    --pi-button-primary-active: var(--b400);
    --pi-button-primary-disabled: var(--n200);
    --pi-button-primary-disabled-color: var(--n0);
    --pi-button-outline: inherit;
    --pi-button-outline-text: var(--n0);
    --pi-button-outline-active: var(--n0);
    --pi-button-outline-active-text: var(--n800);
    --pi-button-secondary: var(--p600);
    --pi-button-secondary-text: var(--n0);
    --pi-button-secondary-hover: var(--p800);
    --pi-button-secondary-active: var(--p400);
    --pi-button-danger: var(--r600);
    --pi-button-danger-text: var(--n0);
    --pi-button-danger-hover: var(--r800);
    --pi-button-danger-active: var(--r400);

    /** Radio component */
    --pi-radio-bullet-subtle: var(--n0);

    /** Switch component */
    --pi-switch-bullet: var(--n800);
    --pi-switch-bullet-checked: var(--n0);
    --pi-switch-disabled: var(--n400);
    --pi-switch-bullet-disabled: var(--n400);

    /** Progress component */
    --pi-progress-complete: var(--g600);

    /* Link tokens */
    --pi-link-text: var(--b600);
    --pi-link-visited-text: var(--p600);
    --pi-link-active-text: var(--b600);

    /** Divider component */
    --pi-divider: var(--n0);

    /** Dialog component */
    --pi-dialog-box-shadow: 0px 4px 30px 0px rgba(16, 24, 64, 0.15);
  }

  :global(body) {
    background-color: var(--pi-bg);
    color: var(--pi-text);
  }
</style>
