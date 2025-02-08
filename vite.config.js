import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
	base: "/nonograms/",
	build: {
		minify: false,
		terserOptions: {
			compress: false,
			mangle: false,
		},
	},
	plugins: [eslint()],
});
