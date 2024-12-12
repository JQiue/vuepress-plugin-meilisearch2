import { defineConfig } from "tsup";
import { commonjs } from "@hyrious/esbuild-plugin-commonjs";

export default defineConfig({
  clean: true,
  dts: true,
  entryPoints: [
    "src/index.ts",
    "src/client/index.ts",
    "src/client/define.ts",
    "src/client/global.ts",
  ],
  esbuildPlugins: [commonjs()],
  format: ["cjs", "esm"],
  outDir: "lib",
  external: [/\.vue$/u, /^@internal/u],
  target: "node16",
});
