import { ContentList } from '../types'

let content: ContentList = {
    games: [
        {
            type: 'iframe',
            id: 'gamesiframe',
            src: '',
            controls: true,
        },
    ],
    exploits: [
        {
            type: 'module',
            name: 'anti force reload',
            description: 'prevents the website from reloading by opening a cancelable alert',
            handler: 'antiforcereload',
        },
        {
            type: 'module',
            name: 'better force select',
            description: 'allows you to select unselectable text on the screen',
            handler: 'betterforceselect',
        },
        {
            type: 'module',
            name: 'quick scroll',
            description: 'quickly scroll to the bottom of the page',
            handler: 'quickscroll',
        },
        {
            type: 'module',
            name: 'goguardian killer',
            description: 'if there is an error, it worked! reload the page after finished. (dunno if it still works)',
            handler: 'goguardiankiller',
        },
        {
            type: 'module',
            name: 'auto hide',
            description: 'automatically hides car axle client when you switch tabs, press backslash to open it again',
            handler: 'autohide',
        },
    ],
    scripts: [
        {
            type: 'block',
            handler: 'scriptblock',
        },
    ],
    pocketbrowser: [
        {
            type: 'input',
            id: 'pocketbrowserinput',
            handler: 'pocketbrowserinput',
            placeholder: 'search google or enter a url',
        },
        {
            type: 'iframe',
            id: 'pocketbrowseriframe',
            src: 'https://google.com/webhp?igu=1',
            controls: true,
        },
    ],
    webtools: [
        {
            type: 'block',
            handler: 'consoleblock',
        },
    ],
    client: [
        {
            type: 'block',
            handler: 'versionblock',
        },
        {
            type: 'block',
            handler: 'tabcloakblock',
        },
    ],
    credits: [
        {
            type: 'block',
            handler: 'creditsblock',
        },
    ],
}

export default content

/* Oh-oh
Ayy Royce, you did it right here
Still poppin' Xans, 2019
Pour up the lean, got me stuck in a dream
Started hittin' licks back in 2014
I got the ice on me, dripping Céline
Flawless came in off a hun'
Me and my niggas still drippin' for fun
Been knew I was the one
Still got niggas on the run, yeah
I got these diamonds, my chain swing
I got these bands, ain't shit changed
Talkin' like you want that smoke (smoke)
We want the same thing (brrt)
I got a brand new chain (chain)
Then I wear ten on my neck, mhm
Then I got a new Patek, yeah
Fly in that bitch with a Tech
Six on a new fit, fifty for a drop top
I was off a bean, the Tech made me Wock' talk
Never been a lame, ain't shit to make her top drop
Smokin' on gas, ooh, I lift off
Last year was broke, this year flooded a Patek
I keep forty racks in my Seattle attic
I hit her two times, then you niggas can have it
My young niggas pull up and shoot like the Magic
Still poppin' Xans, 2019
Pour up the lean, got me stuck in a dream
Started hittin' licks back in 2014
I got the ice on me, dripping Céline
Flawless came in off a hun'
Me and my niggas still drippin' for fun
Been knew I was the one
Still got niggas on the run, yeah
I made it out of the hood (hood)
I still got some dawgs on the run, yeah
This shit comin' in by the ton (ton)
I started this rap shit for fun, yeah
Last weekend I was in Milan (Milan)
You niggas ain't did what I done, yeah
We fuck and then rise to that sun (the sun)
My girl got a bag full of buns, yeah
Hit it, I speed up the Porsche (skrt)
911, it's a sport (sport)
They pay to listen to my voice (voice)
Rich or poor, gotta make you a choice (choice)
I could play with your heart, make her moist (yeah)
Told her "Call me, " she don't need a toy (call)
I'm a saucy young nigga, no soy (soy)
And they know not to play with the boy, yeah
Still poppin' Xans, 2019
Pour up the lean, got me stuck in a dream
Started hittin' licks back in 2014
I got the ice on me, dripping Céline
Flawless came in off a hun'
Me and my niggas still drippin' for fun
Been knew I was the one
Still got niggas on the run, yeah
Ayy Royce, you did it right here*/
