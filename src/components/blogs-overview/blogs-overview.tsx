import { Component, h } from "@stencil/core";
import { IBlog } from "../../interfaces/blog.interface";

@Component({
  tag: "blogs-overview",
  styleUrl: "blogs-overview.scss",
  scoped: true,
})
export class BlogsOverview {
  blogsList: IBlog[] = [];

  async componentWillLoad() {
    this.blogsList = await getBlogList();
  }

  render() {
    return [
      <div id="blogs-list-container">
        <h1 color="var(--app-color-primary)">Blogs</h1>
        <br />
        {this.blogsList.map(({ id }) => (
          <div>{id}</div>
        ))}
      </div>,
    ];
  }
}

// Let's retrieve the list of blogs
async function getBlogList(): Promise<IBlog[]> {
  // Make the request
  const request = await fetch("../../assets/data/blogs-list.json").then((res) =>
    res.json()
  );

  return request;
}
