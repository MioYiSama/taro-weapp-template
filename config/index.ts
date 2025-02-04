import { defineConfig } from "@tarojs/cli";

export default defineConfig<"vite">(async () => {
  return {
    projectName: "template",
    sourceRoot: "./src",
    outputRoot: "./dist",
    framework: "react",
    compiler: "vite",
  };
});
