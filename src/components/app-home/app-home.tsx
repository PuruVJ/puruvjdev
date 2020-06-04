import { Build, Component, ComponentInterface, h, State } from "@stencil/core";
import Typewriter from "typewriter-effect/dist/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss",
  scoped: true,
})
export class AppHome implements ComponentInterface {
  @State() allHidden: boolean = true;

  /**
   * Initialize the typewriter
   */
  initTypewriter() {
    new Typewriter("#typewriter", {
      strings: [
        "codes",
        "creates",
        "debugs",
        "makes mistakes",
        "blogs",
        "designs",
        "creates bugs",
        "fixes bugs",
        "helps",
        "naps",
        "tweets",
        "lives",
        "jokes",
      ],
      autoStart: true,
      loop: true,
    });
  }

  async componentDidLoad() {
    Build.isBrowser && this.initTypewriter();

    // Show everything
    setTimeout(() => (this.allHidden = false), 50);

    document.title = "Puru, Developer and Designer";
  }

  disconnectedCallback() {
    this.allHidden = true;
  }

  render() {
    return [
      <div class={{ "about-container": !0, hidden: this.allHidden }}>
        <img
          class="cover-image"
          src={`../../assets/art/programming-light.svg`}
        />
        <h1>
          Puru <span id="typewriter"></span>
        </h1>
        <h2 id="me-intro">
          Hi, I am Puru. I am a self-taught fullstack web developer based in
          India. I make <mark>blazing fast</mark> and <mark>performant</mark>{" "}
          web apps. Like this blog.
        </h2>
        <br />
        <h1>What I have worked with so far</h1>
        <worked-with />
      </div>,
    ];
  }
}
