import { Component, h } from "@stencil/core";

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
            <stencil-route url="/about" component="about-page" exact={true} />
            <stencil-route
              url={["/blog", "/blog/"]}
              component="blogs-list"
              exact={true}
            />
            <stencil-route
              url="/blog/:id"
              component="blog-page"
              exact={true}
            />
          </stencil-route-switch>
        </stencil-router>
      </main>,
    ];
  }
}
