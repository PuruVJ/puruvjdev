import { Component, h, Host, Prop, State, Build } from "@stencil/core";
import Helmet from "@stencil/helmet";
import { injectHistory, MatchResults } from "@stencil/router";
import { IBlog } from "../../interfaces/blog.interface";

@Component({
  tag: "blog-page",
  styleUrl: "blog-page.scss",
  scoped: true,
})
export class BlogPage {
  @Prop() match: MatchResults;

  @State() blogData: IBlog;

  @State() allHidden = true;

  async componentWillLoad() {
    this.blogData = await getBlogData(this.match.params.id);
  }

  async componentDidLoad() {
    // Show everything
    setTimeout(() => (this.allHidden = false), 50);

    document.title = `${this.blogData.title} // Puru`;

    if (Build.isBrowser) {
      // If is IOS or IPad
      const ua = window.navigator.userAgent;
      const isIOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);

      if (isIOS) {
        document.querySelectorAll("video").forEach((vid) => {
          vid.controls = true;
        });
      }

      await import("lazysizes");
    }
  }

  render() {
    return (
      <Host class={{ hidden: this.allHidden }}>
        <div id="blog-content">
          <h1>{this.blogData.title}</h1>
          <b>
            Published on{" "}
            <span style={{ color: "var(--app-color-primary)" }}>
              {formatDate(this.blogData.date)}
            </span>
          </b>
          <div id="content" innerHTML={this.blogData.body}></div>
        </div>
        <Helmet>
          {/* Default tags */}
          <title>{`${this.blogData.title} // Puru`}</title>
          <meta name="description" content={this.blogData.description} />

          {/* OG tags */}
          <meta
            property="og:title"
            content={`${this.blogData.title} // Puru`}
          />
          <meta property="og:description" content={this.blogData.description} />
          <meta
            property="og:image"
            content={`${window.location.origin}/${this.blogData.cover_image}`}
          />
          <meta property="og:url" content={window.location.href} />
        </Helmet>
      </Host>
    );
  }
}

injectHistory(BlogPage);

/**
 * Load the data of this post
 */
async function getBlogData(id) {
  // Make the request
  const res: IBlog = await fetch(`../../assets/blog/${id}.json`).then((res) =>
    res.json()
  );

  return res;
}

/**
 * Formats the date for showing purposes
 */
function formatDate(dateStr: string) {
  const date = new Date(dateStr);

  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return dateTimeFormat.format(date);
}
