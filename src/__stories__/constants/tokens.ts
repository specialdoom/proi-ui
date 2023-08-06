export const designTokens = {
  n800: { value: "#000000" },
  n600: { value: "#5c5c5c" },
  n400: { value: "#adadad" },
  n200: { value: "#d6d6d6" },
  n0: { value: "#ffffff" },
  g800: { value: "#357266" },
  g600: { value: "#479a89" },
  g400: { value: "#73bfb0" },
  g200: { value: "#9dd2c7" },
  g0: { value: "#d5ece7" },
  r800: { value: "#b53c17" },
  r600: { value: "#e35226" },
  r400: { value: "#e86f4a" },
  r200: { value: "#f99c80" },
  r0: { value: "#ffc1ae" },
  y800: { value: "#cd9400" },
  y600: { value: "#ffc71f" },
  y400: { value: "#ffd147" },
  y200: { value: "#ffdb70" },
  y0: { value: "#ffe699" },
  b800: { value: "#1a6fb6" },
  b600: { value: "#3993dd" },
  b400: { value: "#62aae4" },
  b200: { value: "#85bdea" },
  b0: { value: "#a8d0f0" },
  p800: { value: "#690375" },
  p600: { value: "#873591" },
  p400: { value: "#A568B0" },
  p200: { value: "#c39ac8" },
  p0: { value: "#e1cde3" }
};

export const backgroundTokens = {
  "pi-bg": {
    value: "#ffffff",
    description: "Default page background",
    cssVariable: "var(--n0)"
  },
  "pi-bg-interactive": {
    value: "#3993dd",
    description: "Color used for interactive backgrounds",
    cssVariable: "var(--b600)"
  },
  "pi-bg-interactive-subtle": {
    value: "#62aae4",
    description: "A sublte color for interactive backgrounds",
    cssVariable: "var(--b400)"
  },
  "pi-bg-static": {
    value: "#ffffff",
    description: "A static color for backgrounds",
    cssVariable: "var(--n0)"
  },
  "pi-bg-hover": {
    value: "#d6d6d6",
    description: "Hover color for --pi-bg; Hover color for transparent backgrounds",
    cssVariable: "var(--n200)"
  },
  "pi-bg-inverse": {
    value: "#000000",
    description: "Inverse color for --pi-bg",
    cssVariable: "var(--n800)"
  },
  "pi-bg-disabled": {
    value: "#d6d6d6",
    description: "Color used for disabled backgrounds",
    cssVariable: "var(--n200)"
  },
  "pi-bg-error": {
    value: "#e35226",
    description: "Color used for error backgrounds",
    cssVariable: "var(--r600)"
  }
}

export const borderTokens = {
  "pi-border-interactive": {
    value: "#62aae4",
    description: "Border color for interactive elements",
    cssVariable: "var(--b400)"
  },
  "pi-border-subtle": {
    value: "#5c5c5c",
    description: "Subtle border color",
    cssVariable: "var(--n600)"
  },
  "pi-border-disabled": {
    value: "#adadad",
    description: "Border color used for elements in disabled state",
    cssVariable: "var(--n400)"
  },
  "pi-border-error": {
    value: "#e35226",
    description: "Border color used for elements in error state",
    cssVariable: "var(--r600)"
  },
  "pi-border-inverse": {
    value: "#000000",
    description: "Inverse border color",
    cssVariable: "var(--n800)"
  }
}

export const textTokens = {
  "pi-text": {
    value: "#000000",
    description: "Primary text color used for mainly all elements, headers, etc.",
    cssVariable: "var(--n800)"
  },
  "pi-text-placeholder": {
    value: "#adadad",
    description: "Placeholder text color",
    cssVariable: "var(--n400)"
  },
  "pi-text-on-color": {
    value: "#000000",
    description: "Colors used for text on elements and on buttons",
    cssVariable: "var(--n800)"
  },
  "pi-text-on-color-inverse": {
    value: "#ffffff",
    description: "Inverse color used for text on elements and on buttons",
    cssVariable: "var(--n0)"
  },
  "pi-text-helper": {
    value: "#5c5c5c",
    description: "Color used for descriptions and helper texts",
    cssVariable: "var(--n600)"
  },
  "pi-text-error": {
    value: "#e35226",
    description: "Color used for error text",
    cssVariable: "var(--r600)"
  },
  "pi-text-disabled": {
    value: "#adadad",
    description: "Color used for disabled text",
    cssVariable: "var(--n400)"
  },
  "pi-text-inverse": {
    value: "#ffffff",
    description: "Inverse text color",
    cssVariable: "var(--n0)"
  }
}

export const feedbackTokens = {
  "pi-success": {
    value: "#d5ece7",
    description: "Success or On states",
    cssVariable: "var(--g0)"
  },
  "pi-success-02": {
    value: "#357266",
    description: "Alternative variant for Success or On states",
    cssVariable: "var(--g800)"
  },
  "pi-success-text": {
    value: "#357266",
    description: "Text color for Success or On states",
    cssVariable: "var(--g800)"
  },
  "pi-error": {
    value: "#ffc1ae",
    description: "Invalid or Off states",
    cssVariable: "var(--r0)"
  },
  "pi-error-02": {
    value: "#b53c17",
    description: "Alternative variant for Invalid or Off states",
    cssVariable: "var(--r800)"
  },
  "pi-error-text": {
    value: "#b53c17",
    description: "Text color for Invalid or Off states",
    cssVariable: "var(--r800)"
  },
  "pi-info": {
    value: "#a8d0f0",
    description: "Information",
    cssVariable: "var(--b0)"
  },
  "pi-info-02": {
    value: "#1a6fb6",
    description: "Alternative variant for Information",
    cssVariable: "var(--b800)"
  },
  "pi-info-text": {
    value: "#1a6fb6",
    description: "Text color for Information",
    cssVariable: "var(--b800)"
  },
  "pi-warning": {
    value: "#ffe699",
    description: "Caution or Warning states",
    cssVariable: "var(--y0)"
  },
  "pi-warning-02": {
    value: "#cd9400",
    description: "Alternative variant for Caution or Warning states",
    cssVariable: "var(--y800)"
  },
  "pi-warning-text": {
    value: "#cd9400",
    description: "Text color for Caution or Warning states",
    cssVariable: "var(--y800)"
  }
}

export const focusTokens = {
  "pi-focus": {
    value: "#1a6fb6",
    description: "Color used for focus state of elements for borders or outline",
    cssVariable: "var(--b800)"
  }
}

export const colorTokens = {
  "pi-tufts": {
    value: "#3993dd",
    description: "Tufts variant",
    cssVariable: "var(--b600)"
  },
  "pi-tufts-text": {
    value: "#ffffff",
    description: "Text color for tufts variant",
    cssVariable: "var(--n0)"
  },
  "pi-mikado": {
    value: "#ffc71f",
    description: "Mikado variant",
    cssVariable: "var(--y600)"
  },
  "pi-mikado-text": {
    value: "#000000",
    description: "Text color for mikado variant",
    cssVariable: "var(--n800)"
  },
  "pi-vivid": {
    value: "#873591",
    description: "Vivid variant",
    cssVariable: "var(--p600)"
  },
  "pi-vivid-text": {
    value: "#ffffff",
    description: "Text color for vivid variant",
    cssVariable: "var(--n0)"
  },
  "pi-pine": {
    value: "#479a89",
    description: "Pine variant",
    cssVariable: "var(--g600)"
  },
  "pi-pine-text": {
    value: "#ffffff",
    description: "Text color for pine variant",
    cssVariable: "var(--n0)"
  },
  "pi-flame": {
    value: "#e35226",
    description: "Flame variant",
    cssVariable: "var(--r600)"
  },
  "pi-flame-text": {
    value: "#ffffff",
    description: "Text color for flame variant",
    cssVariable: "var(--n0)"
  },
  "pi-neutral": {
    value: "#000000",
    description: "Neutral variant",
    cssVariable: "var(--n800)"
  },
  "pi-neutral-text": {
    value: "#ffffff",
    description: "Text color for neutral variant",
    cssVariable: "var(--n0)"
  },
  "pi-inverse": {
    value: "#ffffff",
    description: "Inverse variant",
    cssVariable: "var(--n0)"
  },
  "pi-inverse-text": {
    value: "#000000",
    description: "Text color for inverse variant",
    cssVariable: "var(--n800)"
  }
}

export const iconTokens = {
  "pi-icon": {
    value: "#ffffff",
    description: "Color used for icons",
    cssVariable: "var(--n0)"
  },
  "pi-icon-disabled": {
    value: "#bdbdbd",
    description: "Colors used for disabled state icons",
    cssVariable: "var(--n400)"
  },
  "pi-icon-inverse": {
    value: "#000000",
    description: "Inverse color used for icons",
    cssVariable: "var(--n800)"
  }
}

export const linkTokens = {
  "pi-link-text": {
    value: "#3993dd",
    description: "Color used for unvisited links",
    cssVariable: "var(--b600)"
  },
  "pi-link-visited-text": {
    value: "#873591",
    description: "Color used for visited links",
    cssVariable: "var(--p600)"
  },
  "pi-link-active-text": {
    value: "#212121",
    description: "Color used for active links",
    cssVariable: "var(--n800)"
  }
}