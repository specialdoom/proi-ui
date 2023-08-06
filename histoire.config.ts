import { defineConfig } from "histoire"
import { HstSvelte } from "@histoire/plugin-svelte"

export default defineConfig({
  plugins: [
    HstSvelte(),
  ],
  setupFile: "./histoire.setup.js",
  vite: {
    root: "."
  },
  storyIgnored: ["**/node_modules/**", "**/package/**", "**/dist/**"],
  tree: {
    groups: [
      {
        id: "a",
        title: "",
        include: file => file.path.includes("src/__stories__")
      },
      {
        id: "b",
        title: "Design system"
      },
      {
        id: "c",
        title: "Components",
        include: file => file.path.includes("lib")
      },

    ]
  },
  theme: {
    title: "@specialdoom/proi-ui",
    logo: {
      square: "./src/assets/images/square.svg",
      light: "./src/assets/images/logotype.svg",
      dark: "./src/assets/images/dark-logotype.svg",
    },
    logoHref: "https://github.com/specialdoom/proi-ui",
    favicon: "favicon.ico",
    defaultColorScheme: "light",
    colors: {
      gray: {
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#BCC3C7",
        300: "#BCC3C7",
        400: "#89959B",
        500: "#89959B",
        600: "#55666F",
        700: "#000000",
        750: "#000000",
        800: "#000000",
        850: "#000000",
        900: "#000000",
        950: "#000000",
      },
      primary: {
        50: "#A8D0F0",
        100: "#A8D0F0",
        200: "#85BDEA",
        300: "#85BDEA",
        400: "#62AAE4",
        500: "#62AAE4",
        600: "#3993DD",
        700: "#3993DD",
        800: "#1A6FB6",
        900: "#1A6FB6",
      }
    }
  }
})