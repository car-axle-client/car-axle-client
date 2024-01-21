import { layout } from './gui/layout'
import { components } from './gui/app'
import { elementGlobals } from './penexutils'

function setup(app: string) {
    // stfu idc
    document.body.innerHTML = layout + document.body.innerHTML

    let mainApp = document.getElementById(app)

    if (mainApp === null) {
        throw new Error('Could not find app element')
    }

    for (let i = 0; i < components.pens.length; i++) {
        if (components.pens[i].parent === elementGlobals.mainApp) mainApp.appendChild(components.pens[i].element)
    }

    components.scripts.forEach((script) => {
        script()
    })

    // debug hide
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case '\\':
                mainApp = document.getElementById(app)
                if (mainApp === null) {
                    throw new Error('Could not find app element')
                }
                mainApp.style.display = mainApp.style.display === 'none' ? 'flex' : 'none'
            case 'F1':
                // @ts-ignore
                fetch('https://raw.githubusercontent.com/mark-rolich/RulersGuides.js/master/bookmarklet.js')
                    .then((res) => res.text())
                    .then((text) => eval(text))
        }
    })
}

export { setup }

console.info('%cpenex ui framework is loaded', 'color: cornflowerblue; font-size: 20px; font-family: monospace;')
