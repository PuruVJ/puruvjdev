import { mdiHomeVariantOutline, mdiTextBoxOutline } from "@mdi/js";
import { Component, h, Prop } from "@stencil/core";
import { injectHistory, LocationSegments } from "@stencil/router";
import { AppIcon } from "../../abstract-comps/app-icon";

@Component({
  tag: "app-nav",
  styleUrl: "app-nav.scss",
  scoped: true,
})
export class AppNav {
  /**
   * Router location
   */
  @Prop() location: LocationSegments;

  render() {
    return [
      <nav>
        <div id="navigation">
          <stencil-route-link ariaLabel="Go to Home" anchorClass="nav-link" url="/">
            <div
              class={{
                "nav-item": !0,
                selected: this.location.pathname === "/",
              }}
            >
              <div class="icon">
                <AppIcon path={mdiHomeVariantOutline} />
              </div>
              <div class="text">Home</div>
            </div>
          </stencil-route-link>
          <stencil-route-link ariaLabel="Go to Blog" anchorClass="nav-link" url="/blog">
            <div
              class={{
                "nav-item": !0,
                selected: this.location.pathname.includes("blog"),
              }}
            >
              <div class="icon">
                <AppIcon path={mdiTextBoxOutline} />
              </div>
              <div class="text">Blog</div>
            </div>
          </stencil-route-link>
        </div>
      </nav>,
    ];
  }
}

injectHistory(AppNav);
