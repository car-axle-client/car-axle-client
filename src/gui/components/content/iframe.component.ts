import { Component, Elements, Pen } from '../../../penexutils'

export class Iframe implements Component {
    private src: string
    private parent: Pen<HTMLElement>
    private controls: boolean
    private id: string
    private iframe!: Pen<HTMLIFrameElement>

    constructor(parent: Pen<HTMLElement>, src: string = '', id: string, controls: boolean) {
        this.src = src
        this.parent = parent
        this.controls = controls
        this.id = id
    }

    private createControls(iframe: Pen<HTMLIFrameElement>): Pen<HTMLElement>[] {
        let pens = Pen.fromHTML(`
            <div class="cac-iframe-controls rounded-md">
                <div class="cac-iframe-controls-button rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>
                    <span>fullscreen</span>
                </div>
                <div class="cac-iframe-controls-button rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                    <span>about:blank</span>
                </div>
            </div>
            `)

        pens[0].setParent(this.parent.element)

        pens[2].element.addEventListener('click', () => {
            iframe.element.requestFullscreen()
        })

        pens[6].element.addEventListener('click', () => {
            let popout = window.open('', '_blank')
            popout?.document.write(`<iframe src="${this.iframe.element.src}" style="position:fixed;width:100%;border:none;height:100%;"></iframe>`)
            // @ts-ignore - stfu
            popout?.document.getElementsByTagName('body')[0].style.margin = '0'
        })

        return pens
    }

    public penIt(): Pen<Elements>[] {
        let pens = Pen.fromHTML(`<iframe id="${this.id}" src="${this.src}" class="cac-iframe rounded-md"></iframe>`)
        pens[0].setParent(this.parent.element)

        this.controls && pens.push(...this.createControls(pens[0] as Pen<HTMLIFrameElement>))

        this.iframe = pens[0] as Pen<HTMLIFrameElement>
        return pens
    }
}
