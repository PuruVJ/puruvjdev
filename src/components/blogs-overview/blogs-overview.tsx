import { Component, h, State } from "@stencil/core";
import { IBlog } from "../../interfaces/blog.interface";

@Component({
  tag: "blogs-overview",
  styleUrl: "blogs-overview.scss",
  scoped: true,
})
export class BlogsOverview {
  @State() blogsList: IBlog[] = [];

  async componentWillLoad() {
    this.blogsList = await getBlogList();
  }

  render() {
    return [
      <div id="blogs-list-container">
        <img class="cover-image" src={`../../assets/art/typewriter.svg`} />
        <h1>Blog</h1>
        {this.blogsList
          .sort((a, b) => {
            const aDate = new Date(a.date);
            const bDate = new Date(b.date);

            return aDate > bDate ? -1 : 1;
          })
          .map(({ id, title, description, date }, i, { length }) => (
            <stencil-route-link
              anchorClass="blog-link-anchor"
              url={`/blog/${id}`}
            >
              <div class={{ "blog-link": true, last: i + 1 === length }}>
                <h2 id="title">{title}</h2>
                <div id="description">{description}</div>
                <div id="date-posted">{formatDate(date)}</div>
              </div>
            </stencil-route-link>
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
