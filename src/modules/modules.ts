// i was going to make each module a file but you end up having 1000 files and it's a pain to manage
// so yh you get this fat file
// good luck reading it

// Exploits

function NoForceReload(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        window.onbeforeunload = function (e) {
            return "please no"
        };
    } else {
        window.onbeforeunload = null;
    }
}

function none(active: boolean, options: Array<Boolean | String>) {
    return
}

function changeGame(game: string) {
    const gamesIframe = document.getElementById('cac__games__iframe') as HTMLIFrameElement
    gamesIframe.setAttribute('src', game)
}

function game2048(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/2048/')
    }
}

function gameretrobowl(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/retro-bowl/retro.html')
    }
}

function bloons1(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/bloons')
    }
}

function bloons2(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/bloons1')
    }
}

function mouseTrail(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        const div = document.createElement('div')
        div.id = 'cac__mouseTrail'
        div.style.position = 'fixed'
        div.style.width = '30px'
        div.style.height = '30px'
        div.style.borderRadius = '50%'
        div.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
        div.style.zIndex = '9999999999999999999999'
        div.style.transition = 'border 0.5s ease'
        div.style.pointerEvents = 'none'

        document.body.appendChild(div)

        document.addEventListener('mousemove', (e) => {
            div.animate([
                { left: `${e.clientX - 15}px`, top: `${e.clientY - 15}px` }
            ], { duration: 1000, fill: 'forwards', easing: 'ease' })
        })

    } else {
        const div = document.getElementById('cac__mouseTrail')
        if (div) div.remove()
    }

}

function editPageText(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        document.body.contentEditable = 'true'
    } else {
        document.body.contentEditable = 'false'
    }
}

function adremover(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        // skidded modules lmao
        //@ts-ignore
        !function(e){var t={elem(t){!function t(l){for(let o of e.ignore?.selector??[])if(l.matches(o))return!0;for(let r of e.ignore?.func??[])if(r(l))return!0;return!1}(t)&&t.remove()},list(e){Array.from(e).forEach(e=>t.elem(e))},cls(e){t.list(document.getElementsByClassName(e))},selector(e){t.list(document.querySelectorAll(e))},func({func:e,selector:l=null}){let o=null==l?document.getElementsByClassName("*"):document.querySelectorAll(l);for(let r of o)e(r)&&t.elem(r)}};for(let[l,o]of Object.entries(e))if("ignore"!=l)for(let r of o)t[l](r)}({cls:["adsbygoogle","mod_ad_container","brn-ads-box","gpt-ad","ad-box","top-ads-container","adthrive-ad"],selector:['[aria-label="advertisement"]','[class*="-ad "], [class*="-ad-"], [class$="-ad"], [class^="ad-"]',':is(div,iframe)[id^="google_ads_iframe_"]'],func:[{selector:'[class*="ad"],[id*="ad"]',func(e){for(let t of[e.id,...e.classList])if(/(?<!lo)ad(vertisement)?(content)?(engine|ngin)?(container)?($|[-_,\s])/.test(t))return!0}}],ignore:{selector:["body",".ad-layout"],func:[e=>{let t=document.getElementsByTagName("article");for(let l of t)if(e.contains(l))return!0}]}});
    }
}
function betterforceselect(active: boolean, options: Array<Boolean | String>) {
    // This one isn't skidded :/
    let allElements: NodeListOf<HTMLElement> = document.body.querySelectorAll("*");
    console.log(allElements)
    allElements.forEach(function(element: HTMLElement) {
        element.style.setProperty('user-select', 'auto', 'important')
    })
    

}

function savecurrentsettings(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        let enabledOptions = []

    }
}



type functionsObject = {
    [key: string]: (active: boolean, options: Array<Boolean | String>) => void
}

export const functions: functionsObject = {
    'NoForceReload': NoForceReload,
    'game2048': game2048,
    'gameretrobowl': gameretrobowl,
    'mouseTrail': mouseTrail,
    'adremover': adremover,
    'editPageText': editPageText,
    'none': none,
    'betterforceselect': betterforceselect,
    'bloons1': bloons1,
    'bloons2': bloons2
    };
