/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { LocationSegments, MatchResults } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppNav {
        /**
          * Router location
         */
        "location": LocationSegments;
    }
    interface AppRoot {
        "location": LocationSegments;
    }
    interface BlogPage {
        "match": MatchResults;
    }
    interface BlogsOverview {
    }
    interface WorkedWith {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppNavElement extends Components.AppNav, HTMLStencilElement {
    }
    var HTMLAppNavElement: {
        prototype: HTMLAppNavElement;
        new (): HTMLAppNavElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLBlogPageElement extends Components.BlogPage, HTMLStencilElement {
    }
    var HTMLBlogPageElement: {
        prototype: HTMLBlogPageElement;
        new (): HTMLBlogPageElement;
    };
    interface HTMLBlogsOverviewElement extends Components.BlogsOverview, HTMLStencilElement {
    }
    var HTMLBlogsOverviewElement: {
        prototype: HTMLBlogsOverviewElement;
        new (): HTMLBlogsOverviewElement;
    };
    interface HTMLWorkedWithElement extends Components.WorkedWith, HTMLStencilElement {
    }
    var HTMLWorkedWithElement: {
        prototype: HTMLWorkedWithElement;
        new (): HTMLWorkedWithElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-nav": HTMLAppNavElement;
        "app-root": HTMLAppRootElement;
        "blog-page": HTMLBlogPageElement;
        "blogs-overview": HTMLBlogsOverviewElement;
        "worked-with": HTMLWorkedWithElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppNav {
        /**
          * Router location
         */
        "location"?: LocationSegments;
    }
    interface AppRoot {
        "location"?: LocationSegments;
    }
    interface BlogPage {
        "match"?: MatchResults;
    }
    interface BlogsOverview {
    }
    interface WorkedWith {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-nav": AppNav;
        "app-root": AppRoot;
        "blog-page": BlogPage;
        "blogs-overview": BlogsOverview;
        "worked-with": WorkedWith;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-nav": LocalJSX.AppNav & JSXBase.HTMLAttributes<HTMLAppNavElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "blog-page": LocalJSX.BlogPage & JSXBase.HTMLAttributes<HTMLBlogPageElement>;
            "blogs-overview": LocalJSX.BlogsOverview & JSXBase.HTMLAttributes<HTMLBlogsOverviewElement>;
            "worked-with": LocalJSX.WorkedWith & JSXBase.HTMLAttributes<HTMLWorkedWithElement>;
        }
    }
}
