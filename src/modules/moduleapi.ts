import { create_element } from '../UILib'
import { UIManager } from '../UIManager'
import { GAMESLINK } from '../static/constant'
import '../static/iframe.less'

export type moduleDefinition =
    | {
          custom_render: false
          display_name: string
          description?: string
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
export function change_game(link: string): void {
    let iframe = document.getElementById(
        'cac__games__iframe'
    ) as HTMLIFrameElement
    iframe.setAttribute('src', GAMESLINK + link)
}

export function new_iframe(
    UI: UIManager,
    section: HTMLElement,
    link: string,
    id: string = ''
): HTMLIFrameElement {
    let iframe = create_element('iframe', section, {
        class_name: 'cac__iframe',
        id: id,
    }) as HTMLIFrameElement

    iframe.setAttribute('src', link)

    let iframe_controls_container = create_element('div', section, {
        class_name: 'cac__iframe__controls',
    })

    let iframe_fullscreen = create_element(
        'button',
        iframe_controls_container,
        {
            class_name: 'cac__iframe__svg',
            innerHTML:
                '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>',
        }
    )

    let iframe_expand = create_element('button', iframe_controls_container, {
        class_name: 'cac__iframe__svg',
        innerHTML:
            '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>',
    })

    var maximized = false

    iframe_expand.onmousedown = (e) => {
        maximized = !maximized

        if (maximized) {
            iframe.classList.add('cac__iframe__maximized')
            iframe_controls_container.classList.add(
                'cac__iframe__controls__maximized'
            )
            UI.container.appendChild(iframe)
            UI.container.appendChild(iframe_controls_container)
        } else {
            iframe.classList.remove('cac__iframe__maximized')
            iframe_controls_container.classList.remove(
                'cac__iframe__controls__maximized'
            )
            section.insertBefore(iframe, section.children[2])
            section.insertBefore(iframe_controls_container, section.children[3])
        }
    }

    iframe_fullscreen.onmousedown = (e) => {
        iframe.requestFullscreen()
    }

    let iframe_aboutblank = create_element(
        'button',
        iframe_controls_container,
        {
            class_name: 'cac__iframe__svg',
            innerHTML:
                '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>',
        }
    )

    iframe_aboutblank.onmousedown = (e) => {
        // not mine, found it somewhere
        let window_blank = window.open()
        //@ts-ignore
        let iframe_blank = window_blank.document.createElement('iframe')
        //@ts-ignore
        iframe_blank.style =
            'position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;'
        iframe_blank.src = iframe.src
        //@ts-ignore
        window_blank.document.body.appendChild(iframe_blank)
    }

    return iframe
}

export function none(): void {
    // nothing
}
