import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'about-page',
  styleUrl: 'about-page.css',
  shadow: true,
})
export class AboutPage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
