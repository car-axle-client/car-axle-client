import { Component, Pen } from '../../penexutils'

var maximized = false

export class StatusBar extends Component {
    constructor() {
        super()
    }

    public penIt(): Pen<HTMLElement>[] {
        let pens =
            Pen.fromHTML(`
            <div id="app-status" class="rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 160H320c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
            </div>
        `) || []

        let header = pens[0].element


        header.addEventListener('mousedown', (e) => {

            let app = document.getElementById('app-fuk-u')
            if (!app || !header) {
                return
            }
            // makes sures it not clicking something on the header
            if (e.target !== header) {
                return
            }

            e.preventDefault()

            let event = e as MouseEvent

            let shiftX = event.clientX - app.getBoundingClientRect().left
            let shiftY = event.clientY - app.getBoundingClientRect().top

            moveAt(event.pageX, event.pageY)

            app.animate(
                {
                    opacity: [1, 0.9],
                },
                {
                    duration: 200,
                    easing: 'ease',
                    fill: 'forwards',
                }
            )

            function moveAt(pageX: number, pageY: number) {
                if (!app || !header) {
                    return
                }

                app.style.left = pageX - shiftX + 'px'
                app.style.top = pageY - shiftY + 'px'
            }

            function removeListeners() {
                if (!app || !header) {
                    return
                }

                app.animate(
                    {
                        opacity: [0.9, 1],
                    },
                    {
                        duration: 200,
                        easing: 'ease',
                        fill: 'forwards',
                    }
                )

                document.removeEventListener('mousemove', onMouseMove)
                document.removeEventListener('mouseup', removeListeners)

                if (app.getBoundingClientRect().top < 0) {
                    app.style.top = '0px'
                }
            }

            function onMouseMove(e: MouseEvent) {
                moveAt(e.pageX, e.pageY)
            }

            document.addEventListener('mousemove', onMouseMove)

            document.addEventListener('mouseup', removeListeners)
        })


        pens[2].element.addEventListener('mousedown', () => {
            let element = document.getElementById('app-fuk-u')
            element && (element.style.display = 'none')
        })

        pens[4].element.addEventListener('mousedown', () => {
            let element = document.getElementById('app-fuk-u')

            if (element) {
                if (!maximized) {
                    element.style.left = '0px'
                    element.style.top = '0px'
                    element.style.width = '100%'
                    element.style.height = '100%'
                } else {
                    element.style.width = '80%'
                    element.style.height = '80%'
                }

                maximized = !maximized
            }
        })

        pens[6].element.addEventListener('mousedown', () => {
            let element = document.getElementById('app-fuk-u')
            element && element.remove()
        })

        return pens
    }
}
