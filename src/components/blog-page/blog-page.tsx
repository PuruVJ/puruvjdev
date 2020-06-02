import { Component, h, Host, Prop, State } from "@stencil/core";
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
    // Get the data
    this.blogData = await getBlogData(this.match.params.id);
  }

  componentDidLoad() {
    // Show everything
    setTimeout(() => (this.allHidden = false), 50);
  }

  render() {
    return (
      <Host class={{ hidden: this.allHidden }}>
        <div id="blog-content">
          <h1>{this.blogData.title}</h1>
          <div id="content" innerHTML={this.blogData.body}></div>
        </div>
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
