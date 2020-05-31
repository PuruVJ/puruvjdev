import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'blogs-overview',
  styleUrl: 'blogs-overview.css',
  shadow: true,
})
export class BlogsOverview {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
