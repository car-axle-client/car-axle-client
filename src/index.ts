// @format
import { UIManager } from './UIManager'
import { get_main_notification, get_update } from './get_notifications'
import { ITERATION, VERSION } from './static/constant'
import { load_module_values } from './storage_manager'
import { send_to_discord } from './log'

send_to_discord(
    `car axle client - v${VERSION}.${ITERATION}` +
        '\n' +
        'Current URL: ' +
        'window.location.href'
)

// import modules
const modules: any = {}
let context = require.context('./modules/modules', true, /\.ts$/)
context.keys().forEach((key: any) => (modules[key] = context(key)))

function main(): void {
    const UI: UIManager = new UIManager()

    // i just put the icons here cause im lazy af
    UI.newSection(
        'game',
        'games',
        'actual games that work (maybe)',
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"/></svg>',
        true
    )

    UI.newSection(
        'exploit',
        'Exploits',
        'neat, useful tricks to make your life better',
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 64l224 0 0 9.8c0 39-23.7 74-59.9 88.4C167.6 186.5 128 245 128 310.2l0 73.8s0 0 0 0H64V64zm288 0l224 0V384H508.3l-3.7-4.5-75.2-90.2c-9.1-10.9-22.6-17.3-36.9-17.3l-71.1 0-41-63.1c-.3-.5-.6-1-1-1.4c44.7-29 72.5-79 72.5-133.6l0-9.8zm73 320H379.2l42.7 64H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48V400c0 26.5 21.5 48 48 48H308.2l33.2 49.8c9.8 14.7 29.7 18.7 44.4 8.9s18.7-29.7 8.9-44.4L310.5 336l74.6 0 40 48zm-159.5 0H192s0 0 0 0l0-73.8c0-10.2 1.6-20.1 4.7-29.5L265.5 384zM192 128a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>'
    )
    UI.newSection(
        'fun',
        'Fun',
        'some goofy stuff',
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M426.8 14.2C446-5 477.5-4.6 497.1 14.9s20 51 .7 70.3c-14.8 14.8-65.7 23.6-88.3 26.7c-5.6 .9-10.3-3.9-9.5-9.5C403.3 79.9 412 29 426.8 14.2zM75 75C158.2-8.3 284.5-22.2 382.2 33.2c-1.5 4.8-2.9 9.6-4.1 14.3c-3.1 12.2-5.5 24.6-7.3 35c-80.8-53.6-190.7-44.8-261.9 26.4C37.7 180.1 28.9 290 82.5 370.8c-10.5 1.8-22.9 4.2-35 7.3c-4.7 1.2-9.5 2.5-14.3 4.1C-22.2 284.5-8.2 158.2 75 75zm389.6 58.9c4.7-1.2 9.5-2.5 14.3-4.1C534.2 227.5 520.2 353.8 437 437c-83.2 83.2-209.5 97.2-307.2 41.8c1.5-4.8 2.8-9.6 4-14.3c3.1-12.2 5.5-24.6 7.3-35c80.8 53.6 190.7 44.8 261.9-26.4c71.2-71.2 80-181.1 26.4-261.9c10.5-1.8 22.9-4.2 35-7.3zm-105.4 93c10.1-16.3 33.9-16.9 37.9 1.9c9.5 44.4-3.7 93.5-39.3 129.1s-84.8 48.8-129.1 39.3c-18.7-4-18.2-27.8-1.9-37.9c25.2-15.7 50.2-35.4 73.6-58.8s43.1-48.4 58.8-73.6zM92 265.3l97.4-29.7c11.6-3.5 22.5 7.3 19 19l-29.7 97.4c-2.6 8.6-13.4 11.3-19.8 4.9c-2-2-3.2-4.6-3.4-7.3l-5.1-56.1-56.1-5.1c-2.8-.3-5.4-1.5-7.3-3.4c-6.3-6.3-3.6-17.2 4.9-19.8zm193-178.2c2 2 3.2 4.6 3.4 7.3l5.1 56.1 56.1 5.1c2.8 .3 5.4 1.5 7.3 3.4c6.3 6.3 3.6 17.2-4.9 19.8l-97.4 29.7c-11.6 3.5-22.5-7.3-19-19L265.3 92c2.6-8.6 13.4-11.3 19.8-4.9zM14.9 497.1c-19.6-19.6-20-51-.7-70.3C29 412 79.8 403.2 102.4 400.1c5.6-.9 10.3 3.9 9.5 9.5c-3.2 22.5-11.9 73.5-26.7 88.3C66 517 34.5 516.6 14.9 497.1z"/></svg>'
    )

    UI.newSection(
        'js',
        'Webtools',
        'basic javascript console',
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>'
    )

    UI.newSection(
        'pocket',
        'Pocket Browser',
        'an iframe I call a browser',
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M274.69,274.69l-37.38-37.38L166,346ZM256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8ZM411.85,182.79l14.78-6.13A8,8,0,0,1,437.08,181h0a8,8,0,0,1-4.33,10.46L418,197.57a8,8,0,0,1-10.45-4.33h0A8,8,0,0,1,411.85,182.79ZM314.43,94l6.12-14.78A8,8,0,0,1,331,74.92h0a8,8,0,0,1,4.33,10.45l-6.13,14.78a8,8,0,0,1-10.45,4.33h0A8,8,0,0,1,314.43,94ZM256,60h0a8,8,0,0,1,8,8V84a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V68A8,8,0,0,1,256,60ZM181,74.92a8,8,0,0,1,10.46,4.33L197.57,94a8,8,0,1,1-14.78,6.12l-6.13-14.78A8,8,0,0,1,181,74.92Zm-63.58,42.49h0a8,8,0,0,1,11.31,0L140,128.72A8,8,0,0,1,140,140h0a8,8,0,0,1-11.31,0l-11.31-11.31A8,8,0,0,1,117.41,117.41ZM60,256h0a8,8,0,0,1,8-8H84a8,8,0,0,1,8,8h0a8,8,0,0,1-8,8H68A8,8,0,0,1,60,256Zm40.15,73.21-14.78,6.13A8,8,0,0,1,74.92,331h0a8,8,0,0,1,4.33-10.46L94,314.43a8,8,0,0,1,10.45,4.33h0A8,8,0,0,1,100.15,329.21Zm4.33-136h0A8,8,0,0,1,94,197.57l-14.78-6.12A8,8,0,0,1,74.92,181h0a8,8,0,0,1,10.45-4.33l14.78,6.13A8,8,0,0,1,104.48,193.24ZM197.57,418l-6.12,14.78a8,8,0,0,1-14.79-6.12l6.13-14.78A8,8,0,1,1,197.57,418ZM264,444a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V428a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8Zm67-6.92h0a8,8,0,0,1-10.46-4.33L314.43,418a8,8,0,0,1,4.33-10.45h0a8,8,0,0,1,10.45,4.33l6.13,14.78A8,8,0,0,1,331,437.08Zm63.58-42.49h0a8,8,0,0,1-11.31,0L372,383.28A8,8,0,0,1,372,372h0a8,8,0,0,1,11.31,0l11.31,11.31A8,8,0,0,1,394.59,394.59ZM286.25,286.25,110.34,401.66,225.75,225.75,401.66,110.34ZM437.08,331h0a8,8,0,0,1-10.45,4.33l-14.78-6.13a8,8,0,0,1-4.33-10.45h0A8,8,0,0,1,418,314.43l14.78,6.12A8,8,0,0,1,437.08,331ZM444,264H428a8,8,0,0,1-8-8h0a8,8,0,0,1,8-8h16a8,8,0,0,1,8,8h0A8,8,0,0,1,444,264Z"/></svg>'
    )

    UI.newSection(
        'youtube',
        'youtube',
        'its youtube like what did you expect?',
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>'
    )

    UI.newSection(
        'client',
        'Client',
        'client settings and misc stuff',
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>'
    )
    UI.newSection(
        'credit',
        'Credits',
        'i am a professional skidder',
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/></svg>'
    )

    modules && UI.addModulesFromImport(modules)
    load_module_values(UI)
    // Checks if backslash is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key == '\\') {
            UI.toggleUI()
        }
    })

    // i get the update last cause why not?
    get_update(UI.container)
    get_main_notification(UI.container)
    console.log(`car axle client - v${VERSION}.${ITERATION}`)
}

// i hope this works
main()
