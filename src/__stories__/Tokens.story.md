---
id: "tokens"
group: "b"
icon: "carbon:color-palette"
title: "Tokens"
---

# Color palette

The design system it's based on the following color pallete:

| Token (css variable name) | Value     |
| ------------------------- | --------- |
| `--n800`                  | `#000000` |
| `--n600`                  | `#5c5c5c` |
| `--n400`                  | `#adadad` |
| `--n200`                  | `#d6d6d6` |
| `--n0`                    | `#ffffff` |
| `--g800`                  | `#357266` |
| `--g600`                  | `#479a89` |
| `--g400`                  | `#73bfb0` |
| `--g200`                  | `#9dd2c7` |
| `--g0`                    | `#d5ece7` |
| `--r800`                  | `#b53c17` |
| `--r600`                  | `#e35226` |
| `--r400`                  | `#e86f4a` |
| `--r200`                  | `#f99c80` |
| `--r0`                    | `#ffc1ae` |
| `--y800`                  | `#cd9400` |
| `--y600`                  | `#ffc71f` |
| `--y400`                  | `#ffd147` |
| `--y200`                  | `#ffdb70` |
| `--y0`                    | `#ffe699` |
| `--b800`                  | `#1a6fb6` |
| `--b600`                  | `#3993dd` |
| `--b400`                  | `#62aae4` |
| `--b200`                  | `#85bdea` |
| `--b0`                    | `#a8d0f0` |
| `--p800`                  | `#690375` |
| `--p600`                  | `#873591` |
| `--p400`                  | `#A568B0` |
| `--p200`                  | `#c39ac8` |
| `--p0`                    | `#e1cde3` |

Based on the following color pallete we have some generic tokens for different usage from
background to borders. Also we are providing tokens for text, link and icons.

The background tokens are used for the background of the some components and the border
tokens are used for the borders of the components which have a border.

### Background tokens

| Token (variable name)        | Value     | Description                                                      | Initial value  |
| ---------------------------- | --------- | ---------------------------------------------------------------- | -------------- |
| `--pi-bg `                   | `#ffffff` | Default page background                                          | `var(--n0)`    |
| `--pi-bg-interactive `       | `#3993dd` | Color used for interactive backgrounds                           | `var(--b600)`  |
| `--pi-bg-interactive-subtle` | `#62aae4` | A subtle color for interactive backgrounds                       | `var(--b400)`  |
| `--pi-bg-static `            | `#ffffff` | A static color for backgrounds                                   | `var(--n0)`    |
| `--pi-bg-hover `             | `#d6d6d6` | Hover color for --pi-bg; Hover color for transparent backgrounds | `var(--n200)`  |
| `--pi-bg-inverse `           | `#000000` | Inverse color for --pi-bg                                        | `var(--n800)`  |
| `--pi-bg-disabled `          | `#d6d6d6` | Color used for disabled backgrounds                              | `var(--n200)`  |
| `--pi-bg-error `             | `#e35226` | Color used for error backgrounds                                 | `var(--r600) ` |

### Border tokens

| Token (variabel name)     | Value     | Description                                      | Initial value |
| ------------------------- | --------- | ------------------------------------------------ | ------------- |
| `--pi-border-interactive` | `#62aae4` | Border color for interactive elements            | `var(--b400)` |
| `--pi-border-subtle `     | `#5c5c5c` | Subtle border color                              | `var(--n600)` |
| `--pi-border-disabled `   | `#adadad` | Border color used for elements in disabled state | `var(--n400)` |
| `--pi-border-error `      | `#e35226` | Border color used for elements in error state    | `var(--r600)` |
| `--pi-border-inverse `    | `#000000` | Inverse border color                             | `var(--n800)` |

### Text tokens

Text color it's based on the provided specific text tokens:

| Token                        | Value     | Description                                                    | Initial value |
| ---------------------------- | --------- | -------------------------------------------------------------- | ------------- |
| `--pi-text`                  | `#000000` | Primary text color used for mainly all elements, headers, etc. | `var(--n800)` |
| `--pi-text-placeholder`      | `#adadad` | Placeholder text color                                         | `var(--n400)` |
| `--pi-text-on-color`         | `#000000` | Colors used for text on elements and on buttons                | `var(--n800)` |
| `--pi-text-on-color-inverse` | `#ffffff` | Inverse color used for text on elements and on buttons         | `var(--n0)`   |
| `--pi-text-helper`           | `#5c5c5c` | Color used for descriptions and helper texts                   | `var(--n600)` |
| `--pi-text-error`            | `#e35226` | Color used for error text                                      | `var(--r600)` |
| `--pi-text-disabled`         | `#adadad` | Color used for disabled text                                   | `var(--n400)` |
| `--pi-text-inverse`          | `#ffffff` | Inverse text color                                             | `var(--n0)`   |

### Feedback tokens

The design system it's offering some tokens for feedback regarding some actions or events.
We are providing tokens for the following feedback:

| Token               | Value     | Description                                       | Initial value |
| ------------------- | --------- | ------------------------------------------------- | ------------- |
| `--pi-success `     | `#d5ece7` | Success or On states                              | `var(--g0) `  |
| `--pi-success-02 `  | `#357266` | Alternative variant for Success or On states      | `var(--g800)` |
| `--pi-success-text` | `#357266` | Text color for Success or On states               | `var(--g800)` |
| `--pi-error `       | `#ffc1ae` | Invalid or Off states                             | `var(--r0) `  |
| `--pi-error-02 `    | `#b53c17` | Alternative variant for Invalid or Off states     | `var(--r800)` |
| `--pi-error-text `  | `#b53c17` | Text color for Invalid or Off states              | `var(--r800)` |
| `--pi-info `        | `#a8d0f0` | Information                                       | `var(--b0) `  |
| `--pi-info-02 `     | `#1a6fb6` | Alternative variant for Information               | `var(--b800)` |
| `--pi-info-text `   | `#1a6fb6` | Text color for Information                        | `var(--b800)` |
| `--pi-warning `     | `#ffe699` | Caution or Warning states                         | `var(--y0) `  |
| `--pi-warning-02 `  | `#cd9400` | Alternative variant for Caution or Warning states | `var(--y800)` |
| `--pi-warning-text` | `#cd9400` | Text color for Caution or Warning states          | `var(--y800)` |

### Color tokens

The particularity of the design system is that it's based on these 7 tokens that are
basically some varaints that consumers of the design system can use. These tokens are:

| Token               | Value     | Description                    | Initial value |
| ------------------- | --------- | ------------------------------ | ------------- |
| `--pi-tufts `       | `#3993dd` | Tufts variant                  | `var(--b600)` |
| `--pi-tufts-text `  | `#ffffff` | Text color for tufts variant   | `var(--n0) `  |
| `--pi-mikado `      | `#ffc71f` | Mikado variant                 | `var(--y600)` |
| `--pi-mikado-text ` | `#000000` | Text color for mikado variant  | `var(--n800)` |
| `--pi-vivid `       | `#873591` | Vivid variant                  | `var(--p600)` |
| `--pi-vivid-text `  | `#ffffff` | Text color for vivid variant   | `var(--n0) `  |
| `--pi-pine `        | `#479a89` | Pine variant                   | `var(--g600)` |
| `--pi-pine-text `   | `#ffffff` | Text color for pine variant    | `var(--n0) `  |
| `--pi-flame `       | `#e35226` | Flame variant                  | `var(--r600)` |
| `--pi-flame-text `  | `#ffffff` | Text color for flame variant   | `var(--n0) `  |
| `--pi-neutral `     | `#000000` | Neutral variant                | `var(--n800)` |
| `--pi-neutral-text` | `#ffffff` | Text color for neutral variant | `var(--n0) `  |
| `--pi-inverse `     | `#ffffff` | Inverse variant                | `var(--n0) `  |
| `--pi-inverse-text` | `#000000` | Text color for inverse variant | `var(--n800)` |

### Icon tokens

We are using icons and some of the icons are used by some feedback components or for a
simple button that only contains an icon. The diversity of the icons it's based on some
specific icon tokens:

| Token                | Value     | Description                          | Initial value |
| -------------------- | --------- | ------------------------------------ | ------------- |
| `--pi-icon`          | `#ffffff` | Color used for icons                 | `var(--n0)`   |
| `--pi-icon-disabled` | `#bdbdbd` | Colors used for disabled state icons | `var(--n400)` |
| `--pi-icon-inverse`  | `#000000` | Inverse color used for icons         | `var(--n800)` |

### Focus tokens

Focus state on a specific element it's based on the focus state tokens:

| Token        | Value     | Description                                                   | Initial value |
| ------------ | --------- | ------------------------------------------------------------- | ------------- |
| `--pi-focus` | `#1a6fb6` | Color used for focus state of elements for borders or outline | `var(--b800)` |

### Link tokens

We are providing specific tokens for link elements and these are the three link tokens:

| Token                    | Value     | Description                    | Initial value |
| ------------------------ | --------- | ------------------------------ | ------------- |
| `--pi-link-text`         | `#3993dd` | Color used for unvisited links | `var(--b600)` |
| `--pi-link-visited-text` | `#873591` | Color used for visited links   | `var(--p600)` |
| `--pi-link-active-text`  | `#3993dd` | Color used for active links    | `var(--b600)` |

# Component specific tokens

The design system it's offering some tokens for components. We are providing tokens for
the following components: `Button`;

### Button tokens

| Token                             | Value     | Description                              | Initial value |
| --------------------------------- | --------- | ---------------------------------------- | ------------- |
| `--pi-button-primary`             | `#3993dd` | Primary button variant color             | `var(--b600)` |
| `--pi-button-primary-text`        | `#ffffff` | Primary button variant text color        | `var(--n0)`   |
| `--pi-button-primary-hover`       | `#005ea6` | Primary button variant hover color       | `var(--b800)` |
| `--pi-button-primary-active`      | `#66b2ff` | Primary button variant active color      | `var(--b400)` |
| `--pi-button-outline`             | `inherit` | Outline button variant color             | `inherit`     |
| `--pi-button-outline-text`        | `#000000` | Outline button variant text color        | `var(--n800)` |
| `--pi-button-outline-active`      | `#000000` | Outline button variant active color      | `var(--n800)` |
| `--pi-button-outline-active-text` | `#ffffff` | Outline button variant active text color | `var(--n0)`   |
| `--pi-button-secondary`           | `#873591` | Secondary button variant color           | `var(--p600)` |
| `--pi-button-secondary-text`      | `#ffffff` | Secondary button variant text color      | `var(--n0)`   |
| `--pi-button-secondary-hover`     | `#5b0f65` | Secondary button variant hover color     | `var(--p800)` |
| `--pi-button-secondary-active`    | `#c45ea6` | Secondary button variant active color    | `var(--p400)` |
| `--pi-button-danger`              | `#e35226` | Secondary button variant color           | `var(--r600)` |
| `--pi-button-danger-text`         | `#ffffff` | Secondary button variant text color      | `var(--n0)`   |
| `--pi-button-danger-hover`        | `#a61a00` | Secondary button variant hover color     | `var(--r800)` |
| `--pi-button-danger-active`       | `#ff8f73` | Secondary button variant active color    | `var(--r400)` |
