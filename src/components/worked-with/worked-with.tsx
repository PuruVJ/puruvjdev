import { Component, h } from "@stencil/core";

@Component({
  tag: "worked-with",
  styleUrl: "worked-with.scss",
  scoped: true,
})
export class WorkedWith {
  render() {
    return list.map(({ name, url }) => (
      <div class="tech">
        <img src={url} alt={`${name} logo`} />
        <caption>{name}</caption>
      </div>
    ));
  }
}

const list: { url: string; name: string }[] = [
  { url: "../../assets/logo/html.svg", name: "HTML" },
  { url: "../../assets/logo/css.svg", name: "CSS" },
  { url: "../../assets/logo/javascript.svg", name: "JavaScript" },
  { url: "../../assets/logo/typescript.svg", name: "TypeScript" },
  { url: "../../assets/logo/sass.svg", name: "Sass" },
  { url: "../../assets/logo/node.svg", name: "Node" },
  { url: "../../assets/logo/stencil.svg", name: "Stencil" },
  { url: "../../assets/logo/preact.svg", name: "Preact" },
  { url: "../../assets/logo/angular.svg", name: "Angular" },
  { url: "../../assets/logo/polymer.svg", name: "Polymer" },
  { url: "../../assets/logo/undraw.jpg", name: "Undraw" },
  { url: "../../assets/logo/firebase.svg", name: "Firebase" },
  { url: "../../assets/logo/vercel.svg", name: "Vercel(Zeit)" },
  { url: "../../assets/logo/netlify.svg", name: "Netlify" },
  { url: "../../assets/logo/github.svg", name: "Github" },
  { url: "../../assets/logo/jquery.svg", name: "JQuery" },
  { url: "../../assets/logo/php.svg", name: "PHP" },
  { url: "../../assets/logo/mysql.svg", name: "MySQL" },
  { url: "../../assets/logo/python-5.svg", name: "Python" },
  { url: "../../assets/logo/django.svg", name: "Django" },
];
