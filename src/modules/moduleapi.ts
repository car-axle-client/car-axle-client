import { create_element } from '../UILib'
import { UIManager } from '../UIManager'
import { GAMESLINK } from '../static/constant'
import '@/iframe.less'

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
          onShow?: () => void
          onactive?: () => void
          ondisable?: () => void
      }
    | {
          custom_render: true
          render: (UI: UIManager) => void
          onShow?: [string, (UI: UIManager) => void]
      }

export function new_iframe(UI: UIManager, section: HTMLElement, link: string, id: string = '', top: number = 2): HTMLIFrameElement {
    let iframe = create_element('iframe', section, {
        class_name: 'cac__iframe',
        id: id,
    }) as HTMLIFrameElement

    iframe.setAttribute('is', 'x-frame-bypass')
    iframe.setAttribute('src', link)

    let iframe_controls_container = create_element('div', section, {
        class_name: 'cac__iframe__controls',
    })

    let iframe_back = create_element('button', iframe_controls_container, {
        class_name: 'cac__iframe__svg',
        innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>`,
    })

    let iframe_forward = create_element('button', iframe_controls_container, {
        class_name: 'cac__iframe__svg',
        innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>`,
    })

    let iframe_fullscreen = create_element('button', iframe_controls_container, {
        class_name: 'cac__iframe__svg',
        innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>
                Fullscreen`,
    })

    let iframe_expand = create_element('button', iframe_controls_container, {
        class_name: 'cac__iframe__svg',
        innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
            Maximize`,
    })

    let iframe_aboutblank = create_element('button', iframe_controls_container, {
        class_name: 'cac__iframe__svg',
        innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                about:blank`,
    })

    var iframe_history: string[] = []
    var iframe_history_index: number = 0
    var dont_push = false

    iframe.addEventListener('load', (e) => {
        if (dont_push) {
            dont_push = false
            return
        }

        if (iframe_history_index !== 0) {
            iframe_history.slice(iframe_history.length - iframe_history_index - 1, iframe_history.length)
            iframe_history_index = 0
        }
        iframe_history.push(iframe.src)
    })

    iframe_back.addEventListener('mousedown', (e) => {
        iframe.src = iframe_history[iframe_history.length - iframe_history_index - 2]
        iframe_history_index--
        dont_push = true
    })

    iframe_forward.addEventListener('mousedown', (e) => {
        if (iframe_history_index !== 0) {
            iframe.src = iframe_history[iframe_history.length - iframe_history_index - 2]
            iframe_history_index++
            dont_push = true
        }
    })

    var maximized = false

    iframe_expand.onmousedown = (e) => {
        maximized = !maximized

        if (maximized) {
            iframe.classList.add('cac__iframe__maximized')
            iframe_controls_container.classList.add('cac__iframe__controls__maximized')
            UI.container.appendChild(iframe)
            UI.container.appendChild(iframe_controls_container)
        } else {
            iframe.classList.remove('cac__iframe__maximized')
            iframe_controls_container.classList.remove('cac__iframe__controls__maximized')
            section.insertBefore(iframe, section.children[top])
            section.insertBefore(iframe_controls_container, section.children[3])
        }
    }

    iframe_fullscreen.onmousedown = (e) => {
        iframe.requestFullscreen()
    }

    iframe_aboutblank.onmousedown = (e) => {
        // not mine, found it somewhere
        let window_blank = window.open()
        //@ts-ignore
        let iframe_blank = window_blank.document.createElement('iframe')
        //@ts-ignore
        iframe_blank.style = 'position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;'
        iframe_blank.src = iframe.src
        //@ts-ignore
        window_blank.document.body.appendChild(iframe_blank)
    }

    return iframe
}

export function none(): void {
    // nothing
}
