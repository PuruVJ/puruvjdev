import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'blog-page',
  styleUrl: 'blog-page.css',
  shadow: true,
})
export class BlogPage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
