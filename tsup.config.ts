import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entryPoints: [
    "src/index.ts",
    "src/client/index.ts",
    "src/client/define.ts",
    "src/client/global.ts",
  ],
  format: ["cjs", "esm"],
  outDir: "lib",
  external: [/\.vue$/u, /^@internal/u],
  target: "node16",
});
