import { createStore } from "@stencil/store";

export const { state: appState, onChange } = createStore({
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
});

onChange("theme", (theme) => {
  const meta: HTMLMetaElement = document.querySelector(
    'meta[name="theme-color"]'
  );
  meta.content = theme === "dark" ? "#222428" : "rgb(254, 254, 254)";
});
