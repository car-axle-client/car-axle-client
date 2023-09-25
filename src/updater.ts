// Custom UPDATER for car-axle-client
import Notification from './components/notification'
import { VERSION } from './global/constant'

const i = 0

function showUpdate(parent: HTMLElement, new_ver: string) {
    let notifcation = new Notification(
        parent,
        'A New Update is Available!',
        `You can update from <strong>v${VERSION} (i: ${i}) -> v${new_ver}</strong><br> Updating can fix issues you may currently be having and will add new features. They can also cause issues. Be careful!`,
        {
            text: 'Install',
            fn: () => window.open('https://car-axle-client.github.io/install'),
        }
    )
}

export function getUpdate(main: HTMLElement) {
    fetch(
        'https://raw.githubusercontent.com/car-axle-client/car-axle-database/main/version.json'
    )
        .then((result) => result.json())
        .then((json) => {
            if (parseInt(VERSION) >= Number(json['version'])) {
                console.log('Version is UP TO DATE')
            } else {
                showUpdate(main, `${json['version']} (i: ${json['i']})`)
            }
        })
}
