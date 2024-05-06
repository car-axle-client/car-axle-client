import { getJSON } from '../../database'
import { notificationbar } from '../../gui/app'
import { Button } from '../../gui/components/content/button.component'
import { Dropdown } from '../../gui/components/content/dropdown.component'
import { Pen } from '../../penexutils'
import { HandlerDefinition, Proxies } from '../../types'

function moveLetter(letter: string, shift: number) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

    if (alphabet.includes(letter)) {
        let index = alphabet.indexOf(letter)
        index = (index + shift) % alphabet.length
        return alphabet[index]
    }
    return letter
}

export function switchProxy(url: string) {
    //@ts-ignore
    // prettier-ignore
    const _0x7b86b1=_0x4638;function _0x4a61(){const t=["join","13530BaCfqv","72hJaEHQ","search","startsWith","trace","function","(((.+)+)+)+$","https://","log","4yCGELk","showNotification","http","constructor","3562569DwaKbl","3086804NeuzwA","object","undefined","598426MbcnEC","split","pocketbrowseriframe","The proxy has changed, please wait for the page to load (or not)","42510094DXfQLP","error","__proto__","prototype","src","32KJXJBA","1455FpwAGr","5732564aSPjHu","bind","Invalid Proxy","exception","console","info","map","toString","The proxy url is invalid","1861630OiBBiT","length"];return(_0x4a61=function(){return t})()}!function(t,n){const o=_0x4638,e=_0x4a61();for(;;)try{if(906391==-parseInt(o(198))/1*(-parseInt(o(190))/2)+parseInt(o(194))/3+-parseInt(o(209))/4+parseInt(o(208))/5*(-parseInt(o(181))/6)+-parseInt(o(195))/7*(parseInt(o(207))/8)+parseInt(o(182))/9*(-parseInt(o(178))/10)+parseInt(o(202))/11)break;e.push(e.shift())}catch(t){e.push(e.shift())}}();const _0x1935e8=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o.apply(n,arguments);return o=null,t}}:function(){};return t=!1,e}}(),_0x4bc93b=_0x1935e8(this,(function(){const t=_0x4638;return _0x4bc93b[t(176)]()[t(183)](t(187))[t(176)]()[t(193)](_0x4bc93b)[t(183)]("(((.+)+)+)+$")}));_0x4bc93b();const _0x85711e=function(){let t=!0;return function(n,o){const e=t?function(){if(o){const t=o.apply(n,arguments);return o=null,t}}:function(){};return t=!1,e}}(),_0x1ebc36=_0x85711e(this,(function(){const t=_0x4638,n=typeof window!==t(197)?window:typeof process===t(196)&&typeof require===t(186)&&typeof global===t(196)?global:this,o=n[t(173)]=n[t(173)]||{},e=[t(189),"warn",t(174),t(203),t(172),"table",t(185)];for(let n=0;n<e[t(179)];n++){const r=_0x85711e.constructor[t(205)][t(170)](_0x85711e),i=e[n],c=o[i]||r;r[t(204)]=_0x85711e[t(170)](_0x85711e),r.toString=c.toString.bind(c),o[i]=r}}));function _0x4638(t,n){const o=_0x4a61();return _0x4638=function(t,n){return o[t-=170]},_0x4638(t,n)}_0x1ebc36();let FJXJWhW=_0x7b86b1(188)+atob(url[_0x7b86b1(199)]("")[_0x7b86b1(175)]((t=>moveLetter(t,-3)))[_0x7b86b1(180)](""));notificationbar.showNotification("Proxy Switched!",_0x7b86b1(201)),FJXJWhW[_0x7b86b1(184)](_0x7b86b1(192))||notificationbar[_0x7b86b1(191)](_0x7b86b1(171),_0x7b86b1(177)),document.getElementById(_0x7b86b1(200))[_0x7b86b1(206)]=FJXJWhW;
}

function Block(content: Pen<HTMLElement>[]): Pen<HTMLElement>[] {
    let pens: Pen<HTMLElement>[] = Pen.fromHTML(`
                                   <div>
                                        <h1>External Proxies</h1>
                                        <p class="divider">stored on a database and might not work on some websites</p>
                                    </div>
                                    `)

    getJSON<Proxies>('special.json').then(
        (proxies: Proxies) => {
            let proxyIdDropdown = new Dropdown(
                pens[0],
                {
                    type: 'dropdown',
                    id: 'proxydropdown',
                    handler: (value) => {
                        switchProxy(proxies.normal[parseInt(value)])
                    },
                },
                {
                    Proxies: proxies.normal.map((_proxy, index) => index.toString()),
                }
            ).penIt()

            pens.push(
                ...new Button(pens[0], 'Switch To Random Proxy', {
                    type: 'button',
                    id: 'switchproxy',
                    handler: () => {
                        let value = Math.floor(Math.random() * proxies.normal.length).toString()
                        ;(proxyIdDropdown[0].element as HTMLSelectElement).value = value
                        switchProxy(proxies.normal[Math.floor(Math.random() * proxies.normal.length)])
                    },
                }).penIt()
            )

            pens.push(
                ...Pen.fromHTML(`
                                      <h2> Switch to a specific proxy </h2>
                                      `)
            )

            pens.push(...proxyIdDropdown)
        },
        () => {
            let fallback = Pen.fromHTML(`
                <h2>Unable to load proxies. Try using a different website</h2>
            `)
            fallback[0].setParent(pens[0].element)

            pens.push(fallback[0])
        }
    )

    pens[0].setParent(content[0].element)
    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'proxiesblock',
    handler: Block,
}

export default definition
