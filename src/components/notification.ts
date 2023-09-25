import "./notification.ts.less";
import { Component, createElement } from "../UILib";

// yahhhh
//
//
//

export default class Notification implements Component {
  parent: HTMLElement;
  notification!: HTMLElement;
  title: string;
  body: string;

  constructor(
    parent: HTMLElement,
    title: string,
    body: string,
    button?: { text: string; fn: () => void },
  ) {
    this.parent = parent;
    this.title = title;
    this.body = body;

    this.render();
    // custom stuff
    if (button) {
      createElement("button", this.notification, {
        className: "cac__notification__button",
        innerHTML: button.text,
      }).onclick = (e) => button.fn();
    }
  }

  render() {
    this.notification = createElement("div", this.parent, {
      className: "cac__notification",
    });

    createElement("h1", this.notification, {
      className: "cac__notification__header",
      innerHTML: this.title,
    });
    createElement("p", this.notification, {
      className: "cac__notification__body",
      innerHTML: this.body,
    });
    createElement("button", this.notification, {
      className: "cac__notification__button",
      innerHTML: "Dismiss",
    }).onclick = (e) => this.notification.remove();
  }

  display(ms: Number = 500) {
    //todo
  }
}
