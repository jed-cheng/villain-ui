// ./packages/components/button/tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  sourcemap: true,
  dts: true,
  target: "esnext",
  format: ["cjs", "esm"],
});
