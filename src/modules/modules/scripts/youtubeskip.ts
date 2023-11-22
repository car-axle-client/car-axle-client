// GO TO THEIR REPO
//
//
// https://github.com/ading2210/edpuzzle-answers
//
//
// Edpuzzle Answers is licensed under the GPL 3.0 license
// You can find the license here: https://github.com/ading2210/edpuzzle-answers/blob/main/LICENSE
// I have made no changes to the code, and I am not the author of the code
// Ading2210 is the author of the code
// The code is sourced from cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js

import { moduleDefinition } from '../../moduleapi'

function isShowingAd(): boolean {
    return document.querySelector('.video-ads') !== null
}

function skipyoutubeadds() {
    setInterval(() => {
        if (isShowingAd()) {
            let video = document.querySelector('video')
            if (video) {
                video.currentTime = video.duration
            }
        }
    }, 500)
}

const plugin: moduleDefinition = {
    custom_render: false,
    display_name: 'Edpuzzle Answers',
    id: 'edpuzzle',
    description:
        'Will skip youtube adds automatically./ (By Multiple Individuals)',
    section: 'cheats',
    always: true,
    onactive: skipyoutubeadds,
}

export default plugin
