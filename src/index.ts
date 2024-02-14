// welcome to nextgen
// have fun ;)
// ~ penguinify
// jk ik u wont have fun

import { VERSION, ITERATION, NAME, CREATOR, ENV } from './constants'
import { setup } from './penex'
import './styles/sidebar.less'
import './styles/index.less'
import './styles/utils.less'
import './styles/maincontent.less'
import './styles/content.less'
import { checkForUpdate } from './database'

function main() {
    console.info(`${VERSION}.${ITERATION} ${NAME} by ${CREATOR} (${ENV}), thank you from penguinify`)
    if (ENV === 'development') console.warn('car axle client development mode is enabled, your cool to do whatever you want ;)')

    checkForUpdate().then((update: boolean) => {
        if (update) {
            console.warn('Client outdated, please install the latest version!')
        }
    })

    setup('app-fuk-u')

    const header = document.getElementById('app-status')
    const app = document.getElementById('app-fuk-u')

    if (!app || !header) {
        return
    }

    // its not bad code if i dont say it is
    header.addEventListener('mousedown', (e) => {
        // makes sures it not clicking something on the header
        if (e.target !== header) {
            return
        }

        e.preventDefault()

        let shiftX = e.clientX - app.getBoundingClientRect().left
        let shiftY = e.clientY - app.getBoundingClientRect().top

        moveAt(e.pageX, e.pageY)

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
}

// i hope this works...
main()
