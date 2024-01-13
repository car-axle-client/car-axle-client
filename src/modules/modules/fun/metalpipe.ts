import { moduleDefinition } from '../../moduleapi'
// function is still metal pipe 'cause i dont got time to change allat (i have no clue what any of it means)
function metalpipe() {
    let images = document.getElementsByTagName('img')
    if (!images) return

    for (let image of images) {
        var audio = new Audio('https://us-tuna-sounds-files.voicemod.net/2ff3560b-a76f-49dd-adbc-709b9f59c5c2-1704237226346.mp3')
        audio.play()
        image.src = 'https://us-tuna-sounds-images.voicemod.net/2ff3560b-a76f-49dd-adbc-709b9f59c5c2-1704237226346.jpeg'
    }
}

const plugin: moduleDefinition = {
    display_name: '🎡',
    description: '🎡',
    id: 'metalpipe',
    section: 'fun',
    onactive: metalpipe,
    always: true,
    custom_render: false,
}

export default plugin
