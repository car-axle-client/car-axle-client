import './notification.ts.less'
import { Component, create_element } from '../UILib'

export default class Notification implements Component {
    parent: HTMLElement
    notification!: HTMLElement
    title: string
    body: string

    constructor(
        parent: HTMLElement,
        title: string,
        body: string,
        button?: { text: string; fn: () => void }
    ) {
        this.parent = parent
        this.title = title
        this.body = body

        this.render()
        // custom stuff
        if (button) {
            create_element('button', this.notification, {
                class_name: 'cac__notification__button',
                innerHTML: button.text,
            }).onclick = (e) => button.fn()
        }
    }

    render() {
        this.notification = create_element('div', this.parent, {
            class_name: 'cac__notification',
        })

        create_element('h1', this.notification, {
            class_name: 'cac__notification__header',
            innerHTML: this.title,
        })
        create_element('p', this.notification, {
            class_name: 'cac__notification__body',
            innerHTML: this.body,
        })
        create_element('button', this.notification, {
            class_name: 'cac__notification__button cac__notification__dismiss',
            innerHTML: 'Dismiss',
        }).onclick = (e) => this.notification.remove()
    }

    display(ms: Number = 500) {
        //todo
    }
}
