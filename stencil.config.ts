import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  globalStyle: "src/global/app.scss",
  globalScript: "src/global/app.ts",
  taskQueue: "async",
  enableCache: false,
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: { swSrc: "src/sw.js", globIgnores: ["**/*.json"] },
      baseUrl: "https://puruvjdev.now.sh/",
      prerenderConfig: "./prerender-config.ts",
    },
  ],
  plugins: [sass({ includePaths: ["./node_modules/"] })],
  copy: [
    {
      src: "./google7cdade01e9ae4685.html",
      dest: "google7cdade01e9ae4685.html",
    },
  ],
};
