import { Build, Component, ComponentInterface, h } from "@stencil/core";
import Typewriter from "typewriter-effect/dist/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss",
  scoped: true,
})
export class AppHome implements ComponentInterface {
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

  componentDidLoad() {
    Build.isBrowser && this.initTypewriter();
  }

  render() {
    return [
      <div class="about-container">
        <img
          class="cover-image"
          src={`../../assets/art/programming-light.svg`}
        />
        <h1>
          Puru <span id="typewriter"></span>
        </h1>
        <h2>
          Hi, I am Puru. I am a self-taught fullstack web developer based in
          India. I make <mark>blazing fast</mark> and <mark>performant</mark>{" "}
          web apps.
        </h2>
        <br />
        <h1>What I have worked with so far</h1>
        <worked-with />
      </div>,
    ];
  }
}
