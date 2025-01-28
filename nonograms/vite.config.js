import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  base: '/maria2721-JSFE2024Q4/nonograms/',
  build: {
    minify: false,
    terserOptions: {
      compress: false,
      mangle: false,
    },
  },
  plugins: [eslint()],
});
