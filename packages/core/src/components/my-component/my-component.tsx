import { Component, Host, h } from '@stencil/core';

let buttonId = 0;

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  private popover: HTMLElement;
  private popoverRef: HTMLElement;

  private onClick = () => {
    this.popover = this.popoverRef;
    console.log('just here to force `popover` props to be used', this.popover);
  };

  render() {
    const triggerId = `trigger-${buttonId++}`;

    return (
      <Host>
        <button type="button" popoverTarget={triggerId} onClick={this.onClick}>
          button
        </button>
        <div id={triggerId} popover="true" ref={el => (this.popoverRef = el)}>
          content
        </div>
      </Host>
    );
  }
}
