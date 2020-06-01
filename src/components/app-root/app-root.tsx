import { mdiTwitter } from "@mdi/js";
import { Component, h } from "@stencil/core";
import { AppIcon } from "../../abstract-comps/app-icon";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  scoped: true,
})
export class AppRoot {
  render() {
    return [
      <app-nav />,
      <main>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="app-home" exact={true} />
            <stencil-route
              url={["/blog", "/blog/"]}
              component="blogs-overview"
              exact={true}
            />
            <stencil-route
              url={["/blog/:id", "/blog/:id/"]}
              component="blog-page"
              exact={true}
            />
          </stencil-route-switch>
        </stencil-router>
      </main>,
      <footer>
        <div id="text">
          <span id="copyright">&copy;</span> &nbsp; Puru Vijay
        </div>
        <div id="social">
          <span id="twitter">
            <a
              href="https://twitter.com/puruvjdev"
              target="_blank"
              rel="noopener"
            >
              <AppIcon path={mdiTwitter} />
            </a>
          </span>
        </div>
      </footer>,
    ];
  }
}
