import { Component, create_element } from '../UILib'
import './notificationbar.ts.less'

type NotificationType = 'success' | 'error' | 'warning' | 'info'

export default class NotificationBar implements Component {
    parent: HTMLElement
    notification_container!: HTMLElement

    constructor(parent: HTMLElement) {
        this.parent = parent
        this.render()
    }

    render(): void {
        this.notification_container = create_element('div', this.parent, {
            id: 'cac__NOTIFICATIONBAR',
        })
    }

    private hide_notification(notification: HTMLElement): void {
        notification.classList.add('cac__mini__notification--hidden')
        setTimeout(() => {
            notification.remove()
        }, 180)
    }

    new_notification(title: string, message: string, type: NotificationType = 'info'): void {
        const notification = create_element('div', this.notification_container, {
            class_name: `cac__mini__notification cac__mini__notification--${type}`,
        })

        const notification_title = create_element('h3', notification, {
            class_name: 'cac__mini__notification__header',
            innerHTML: title,
        })

        const notification_message = create_element('p', notification, {
            class_name: 'cac__mini__notification__message',
            innerHTML: message,
        })

        notification.addEventListener('click', () => {
            notification.removeEventListener('click', () => {})
            this.hide_notification(notification)
        })

        setTimeout(() => {
            notification.classList.add('cac__mini__notification--hidden')
            setTimeout(() => {
                notification.remove()
            }, 180)
        }, 5000)
    }
}
