import { mdiTwitter } from "@mdi/js";
import { Component, h, Prop, Watch } from "@stencil/core";
import { AppIcon } from "../../abstract-comps/app-icon";
import { LocationSegments, injectHistory } from "@stencil/router";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  scoped: true,
})
export class AppRoot {
  @Prop() location: LocationSegments;

  @Watch("location") onRouteChange() {
    setTimeout(
      () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }),
      200
    );
  }

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
            <stencil-route url="/blog/:id" component="blog-page" />
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
              class="link-a"
              aria-label="Puru Vijay's Twitter link"
            >
              <AppIcon path={mdiTwitter} />
            </a>
          </span>
        </div>
      </footer>,
    ];
  }
}

injectHistory(AppRoot);
