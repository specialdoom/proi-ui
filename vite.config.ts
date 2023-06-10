import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	plugins: [svelte()],
	test: {
		globals: true,
		include: ["src/**/*.test.ts"],
		environment: "jsdom",
		reporters: process.env.CI ? "junit" : "default",
		outputFile: "test-results.xml",
	}
})