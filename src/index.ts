// welcome to nextgen
// have fun ;)
// ~ penguinify
//
// car axle client uses a in house ui framework.

import { VERSION, ITERATION, NAME, CREATOR, ENV } from './constants'
import { setup } from './penex'
import './styles/sidebar.less'
import './styles/index.less'
import './styles/utils.less'
import './styles/maincontent.less'
import './styles/modules.less'
import { checkForUpdate } from './database'

function main() {
    console.info(`${VERSION}.${ITERATION} ${NAME} by ${CREATOR} (${ENV}), thank you from penguinify`)
    if (ENV === 'development') console.warn('car axle client development mode is enabled, your cool to do whatever you want ;)')

    checkForUpdate().then((update: boolean) => {
        if (update) {
            console.warn('Client outdated, please install the latest version!')
        }
    })

    // DW ABOUT IT, ITS NOT BAD CODE IF I DON'T SAY IT IS
    document.addEventListener('DOMContentLoaded', () => {
        setup('app-fuk-u')

        const header = document.getElementById('app-status')
        const app = document.getElementById('app-fuk-u')

        if (!app || !header) {
            return
        }

        header.addEventListener('mousedown', (e) => {
            e.preventDefault()

            let shiftX = e.clientX - app.getBoundingClientRect().left
            let shiftY = e.clientY - app.getBoundingClientRect().top

            moveAt(e.pageX, e.pageY)

            app.animate(
                {
                    transform: ['scale(1)', 'scale(0.98)'],
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

                app.animate(
                    {
                        left: pageX - shiftX + 'px',
                        top: pageY - shiftY + 'px',
                    },
                    {
                        duration: 1000,
                        easing: 'ease-out',
                        fill: 'forwards',
                    }
                )
            }

            function removeListeners() {
                if (!app || !header) {
                    return
                }

                app.animate(
                    {
                        transform: ['scale(0.98)', 'scale(1)'],
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
            }

            function onMouseMove(e: MouseEvent) {
                moveAt(e.pageX, e.pageY)
            }

            document.addEventListener('mousemove', onMouseMove)

            document.addEventListener('mouseup', removeListeners)
        })
    })
}

// i hope this works...
main()
