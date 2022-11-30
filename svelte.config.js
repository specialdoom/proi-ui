import preprocess from "svelte-preprocess";

const config = {
	package: {
		source: "lib",
		files: (filepath) => {
			if (filepath.includes("/__stories__/")) return false;
			if (filepath.endsWith(".story.svelte")) return false;
			if (filepath.includes("/__tests__/")) return false;

			return true;
		}
	},
	preprocess: preprocess({
		sourceMap: true
	})
};

export default config;
