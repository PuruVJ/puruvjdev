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
      serviceWorker: {
        swSrc: "src/sw.js",
        globIgnores: ["**/*.json"],
        globPatterns: ["**/*.{js,css,html,woff2,woff, svg}"],
      },
      baseUrl: "https://puruvj.dev",
      prerenderConfig: "./prerender-config.ts",
      copy: [
        {
          src: "./google7cdade01e9ae4685.html",
          dest: "google7cdade01e9ae4685.html",
        },
      ],
    },
  ],
  plugins: [sass({ includePaths: ["./node_modules/"] })],
};
