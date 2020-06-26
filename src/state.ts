import { createStore } from "@stencil/store";

export const { state: appState } = createStore({
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
});
