// i was going to make each module a file but you end up having 1000 files and it's a pain to manage
// so yh you get this fat file
// good luck reading it
//
//
//
//
//
// GOOD LUCK
// YOU ARE A BRAVE SOLDIER
//
//
//
//
//

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

function bb(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/bb/index.html')
    }
}
function ducklife4(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/ducklife4/index.html')
    }
}
function bloons4(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/btd4.html')
    }
}
function motoxm3(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/motox3m/index.html')
    }
}
function rom(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/temptations/index.html')
    }
}

function slope(active:boolean, options: Array<Boolean | String>) {
  
  if (active) {
    changeGame("https://penguinify-web-dev.github.io/slope/index.html")
  }
}

function motoxm3winter(active:boolean, options: Array<Boolean | String>) {
  if (active) {
    changeGame("https://penguinify-web-dev.github.io/wintermotox3m/index.html")
  }
  
}

function agario(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame("https://penguinify-web-dev.github.io/agario-minigame/dots.html")
  }
}

function gameretrobowl(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/retro-bowl/retro.html')
    }
}
function bbs(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/basketball-stars/index.html')
    }
}
function bloons1(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/bloons')
    }
}
function yohoho(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/yohoho/index.html')
    }
}
function minecraft(active: boolean, options: Array<Boolean | String>) {
    if (active) {
        changeGame('https://penguinify-web-dev.github.io/Offline_Download_Version.html')
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

function uhoh(active: boolean, options: Array<Boolean | String>) {
  function a(e: any){var n=e.childNodes;for(var i in n){a(n[i]);if(n[i].style) n[i].style.backgroundImage="url(https://i.chzbgr.com/full/5759452672/h934FBF16/my-eyes-my-eyessssssssss)";}} a(document);

}

function suggestfeature(active: boolean, options: Array<Boolean | String>) {
  if (active) {
    window.open("https://github.com/car-axle-client/car-axle-client/issues/new?assignees=&labels=enhancement&projects=&template=new_feature.md&title=Feature")
  }
}

function checkupdate(active: boolean, options: Array<Boolean | String>) {
  if (active) {
    import("../updater")
      .then((updater) => {
        updater.getUpdate(document.getElementById("cac__CONATAINER") as HTMLElement)
      })
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
    'bloons2': bloons2,
    'agario': agario,
    'motoxm3winter': motoxm3winter,
    'slope': slope,
    'rom': rom,
    'yohoho': yohoho,
    'uhoh': uhoh,
    'bbs': bbs,
    'suggest': suggestfeature,
<<<<<<< Updated upstream
    'minecraft': minecraft
=======
    'motoxm3': motoxm3,
    'ducklife4': ducklife4,
    'checkupdate': checkupdate,
    'bb': bb,
    'bloons4': bloons4,
>>>>>>> Stashed changes
    };
