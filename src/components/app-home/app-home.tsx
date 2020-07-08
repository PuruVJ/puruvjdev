import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss",
  scoped: true,
})
export class AppHome implements ComponentInterface {

  async componentDidLoad() {
    document.title = "Puru, Developer and Designer";
  }

  render() {
    return [
      <div class={{ "about-container": !0 }}>
        <img
          class="cover-image lazyload"
          alt=""
          src={`../../assets/art/programming-light.svg`}
        />
        <h1 class="coded-name">// Puru Vijay</h1>
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
