import { UIManager } from '../UIManager'
import { GAMESLINK } from '../static/constant'

export type moduleDefinition =
    | {
        custom_render: false
        display_name: string
        id: string
        section: string
        reset?: boolean
        always?: boolean
        disabled?: boolean
        // Options are wip
        onactive?: () => void
        ondisable?: () => void
    }

    | {
        custom_render: true
        render: (UI: UIManager) => void
    }

// Function to change link of the iframe
export function changeGame(link: string): void {
    let iframe = document.getElementById(
        'cac__games__iframe'
    ) as HTMLIFrameElement
    iframe.setAttribute('src', GAMESLINK + link)
}

export function none(): void {
    // nothing
}
