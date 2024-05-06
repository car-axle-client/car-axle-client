import { ContentList } from '../types'

let content: ContentList = {
    games: [
        {
            type: 'iframe',
            id: 'gamesiframe',
            src: '',
            controls: true,
        },
        {
            type: 'block',
            handler: 'gameslinkblock',
        },
        {
            type: 'block',
            handler: 'customgameslinkblock',
        },
        {
            type: 'block',
            handler: 'gameslistblock',
        },
    ],
    exploits: [
        {
            type: 'module',
            name: 'anti force reload',
            description: 'prevents the website from reloading by opening a cancelable alert',
            handler: 'antiforcereload',
        },
        {
            type: 'module',
            name: 'better force select',
            description: 'allows you to select unselectable text on the screen',
            handler: 'betterforceselect',
        },
        {
            type: 'module',
            name: 'quick scroll',
            description: 'quickly scroll to the bottom of the page',
            handler: 'quickscroll',
        },
        {
            type: 'module',
            name: 'goguardian killer',
            description: 'if there is an error, it worked! reload the page after finished. (dunno if it still works)',
            handler: 'goguardiankiller',
        },
        {
            type: 'module',
            name: 'auto hide',
            description: 'automatically hides car axle client when you switch tabs, press backslash to open it again',
            handler: 'autohide',
        },
    ],
    scripts: [
        {
            type: 'block',
            handler: 'scriptblock',
        },
    ],
    pocketbrowser: [
        {
            type: 'input',
            id: 'pocketbrowserinput',
            handler: 'pocketbrowserinput',
            placeholder: 'search google or enter a url',
        },
        {
            type: 'iframe',
            id: 'pocketbrowseriframe',
            src: 'https://google.com/webhp?igu=1',
            controls: true,
        },
        {
            type: 'block',
            handler: 'proxiesblock',
        },
        {
            type: 'block',
            handler: 'localproxyblock',
        },
    ],
    webtools: [
        {
            type: 'block',
            handler: 'consoleinputblock',
        },
        {
            type: 'block',
            handler: 'storageblock',
        },
    ],

    client: [
        {
            type: 'block',
            handler: 'versionblock',
        },
        {
            type: 'block',
            handler: 'tabcloakblock',
        },
    ],
    credits: [
        {
            type: 'block',
            handler: 'creditsblock',
        },
    ],
    dev: [
        {
            type: 'module',
            name: 'show notification',
            description: 'shows notification',
            handler: 'shownotification',
        },
        {
            type: 'block',
            handler: 'typeblock',
        },
    ],
}

export default content
