import { Icon, createElement } from "../../UILib";

import "./icon.ts.less";

// i bet some random guy looked at this thinking its good code.
// (its not, its absolute trash, and a pain to refractor)
export default class Destroy implements Icon {
  public parent: HTMLElement;
  public icon: string;
  public name: string;
  public hoverName!: HTMLElement;
  private iconElement!: HTMLElement;

  constructor(parent: HTMLElement, name: string, icon: string) {
    this.parent = parent;
    this.icon = icon;
    this.name = name;

    this.render();
  }

  action(): void {
    document.getElementById("cac__CONTAINER")?.remove();
  }

  render(): void {
    this.iconElement = createElement("button", this.parent, {
      className: "cac__tabbar__button",
      innerHTML: this.icon,
    });

    this.iconElement.onclick = this.action;

    this.hoverName = createElement("p", this.iconElement, {
      className: "cac__tabbar__button__hovername",
      innerHTML: this.name,
    });
  }
}
