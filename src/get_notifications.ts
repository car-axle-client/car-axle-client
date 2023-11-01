// Custom UPDATER for car-axle-client
import Notification from './components/notification'
import { VERSION, ITERATION } from './static/constant'

function show_update(parent: HTMLElement, new_ver: string) {
    let notifcation = new Notification(
        parent,
        'A New Update is Available!',
        `You can update from <strong>v${VERSION} (i: ${ITERATION}) -> v${new_ver}</strong><br> Updating can fix issues you may currently be having and will add new features. They can also cause issues. Be careful!`,
        {
            text: 'Install',
            fn: () => window.open('https://car-axle-client.github.io/install'),
        }
    )
}

export function get_update(main: HTMLElement) {
    fetch(
        'https://raw.githubusercontent.com/car-axle-client/car-axle-database/main/version.json'
    )
        .then((result) => result.json())
        .then((json) => {
            if (parseInt(VERSION) >= Number(json['version']) && parseInt(ITERATION) >= Number(json['i'])) {
                console.log('Version is UP TO DATE')
            } else {
                show_update(main, `${json['version']} (i: ${json['i']})`)
            }
        })
}

export function get_main_notification(main: HTMLElement) {
    fetch(
        'https://raw.githubusercontent.com/car-axle-client/car-axle-database/main/notification.json'
    )
        .then((result) => result.json())
        .then((json) => {
            new Notification(main, json['title'], json['body'], {
                text: 'Vote!',
                fn: () => window.open(json['link']),
            })
        })
}
