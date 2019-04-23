import { terser } from "rollup-plugin-terser";

export default {
  input: ["src/index.js"],
  plugins: [terser()],
  output: {
    dir: "dist-rollup",
    format: "system"
    // format: "esm"
  }
};
