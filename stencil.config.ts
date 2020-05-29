import { Config } from "@stencil/core";

export const config: Config = {
  globalStyle: "src/global/app.scss",
  globalScript: "src/global/app.ts",
  taskQueue: "async",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: "https://puruvjdev.now.sh/",
      prerenderConfig: './prerender-config.ts'
    },
  ],
};
