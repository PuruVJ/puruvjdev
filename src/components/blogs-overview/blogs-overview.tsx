import { Component, h, State } from "@stencil/core";
import Helmet from "@stencil/helmet";
import { IBlog } from "../../interfaces/blog.interface";

@Component({
  tag: "blogs-overview",
  styleUrl: "blogs-overview.scss",
  scoped: true,
})
export class BlogsOverview {
  @State() blogsList: IBlog[] = [];

  /**
   * Whether everything is hidden
   */
  @State() allHidden: boolean = true;

  pageTitle = "Blog // Puru";

  async componentWillLoad() {
    this.blogsList = await getBlogList();
  }

  async componentDidLoad() {
    // Show everything
    setTimeout(() => (this.allHidden = false), 50);

    document.title = this.pageTitle;
  }

  render() {
    return [
      <div id="blogs-list-container" class={{ hidden: this.allHidden }}>
        <img
          alt=""
          class="cover-image lazyload"
          src="../../assets/art/typewriter.svg"
        />
        <h1>Blog</h1>
        {this.blogsList.map(
          ({ id, title, description, date }, i, { length }) => (
            <stencil-route-link
              ariaLabel={`Blog Post: ${title}`}
              anchorClass="link-a"
              url={`/blog/${id}`}
            >
              <div
                onMouseOver={() => prefetchBlogPost(id)}
                class={{ "blog-link": true, last: i + 1 === length }}
              >
                <h2 class="title">{title}</h2>
                <div class="description">{description}</div>
                <div class="date-posted">{formatDate(date)}</div>
              </div>
            </stencil-route-link>
          )
        )}
      </div>,
      <Helmet>
        {/* Default tags */}
        <title>{this.pageTitle}</title>
        <meta
          name="description"
          content="Read about web development, designing and programming on Puru Vijay's blog"
        />

        {/* OG tags */}
        <meta property="og:title" content={this.pageTitle} />
        <meta
          property="og:description"
          content="Read about web development, designing and programming on Puru Vijay's blog."
        />
        <meta
          property="og:image"
          content={`${window.location.origin}/assets/media/blog-social-intro.png`}
        />
        <meta property="og:url" content={window.location.href} />
      </Helmet>,
    ];
  }
}

function prefetchBlogPost(id: string) {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = `./assets/blog/${id}.json`;

  document.head.appendChild(link);
}

// Let's retrieve the list of blogs
async function getBlogList(): Promise<IBlog[]> {
  // Make the request
  const request: IBlog[] = await fetch(
    "../../assets/data/blogs-list.json"
  ).then((res) => res.json());

  return request.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);

    return aDate > bDate ? -1 : 1;
  });
}

/**
 * Formats the date for showing purposes
 */
function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  console.log(date);

  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return dateTimeFormat.format(date);
}
