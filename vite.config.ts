import dts from "vite-plugin-dts";
import { defineConfig } from 'vite'


export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: new URL("./lib/index.ts", import.meta.url).pathname,
      name: 'strtobool',
      fileName: 'index',
      formats: ["es", "umd"],
    },
  },
})
