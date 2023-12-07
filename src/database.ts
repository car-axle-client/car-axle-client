// Custom UPDATER for car-axle-client
import Notification from './components/notification'
import { VERSION, ITERATION, COMMUNITY, DATABASE } from './static/constant'

export async function get_plugins(): Promise<any> {
    return fetch(`${COMMUNITY}meta.json`).then((result) => result.json())
}

export function checkStatus(): boolean {
    // checks if you can use fetch on this website
    fetch(`${DATABASE}version.json`).then((res) => {
        if (res.status === 200) {
            return true
        }
    })

    return false
}

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
    fetch(`${DATABASE}version.json`)
        .then((result) => result.json())
        .then((json) => {
            let current = parseFloat(`${VERSION}.${ITERATION}`)
            let new_ver = parseFloat(`${json['version']}.${json['i']}`)
            if (current >= new_ver) {
                console.info(`Version is UP TO DATE (v${VERSION}.${ITERATION})`)
            } else {
                show_update(main, `${json['version']} (i: ${json['i']})`)
                console.warn(`Version is OUT OF DATE (v${VERSION}.${ITERATION}) -> v${json['version']} (i: ${json['i']})`)
            }
        })
}

export function get_main_notification(main: HTMLElement) {
    fetch(`${DATABASE}notification.json`)
        .then((result) => result.json())
        .then((json) => {
            new Notification(main, json['title'], json['body'], {
                text: 'Vote!',
                fn: () => window.open(json['link']),
            })
        })
}
