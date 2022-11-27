import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	package: {
		source: "lib",
		files: (filepath) => {
			if (filepath.includes("/stories/")) return false;
			if (filepath.endsWith(".story.svelte")) return false;
			if (filepath.includes("/__tests__/")) return false;

			return true;
		}
	},
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
	}
};

export default config;
