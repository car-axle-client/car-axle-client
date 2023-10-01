import { moduleDefinition } from "../../moduleapi";

function metalpipe() {
    let images = document.getElementsByTagName("img")
    if (!images) return


    
    for (let image of images) {
        var audio= new Audio('https://www.myinstants.com/media/sounds/jixaw-metal-pipe-falling-sound.mp3');
        audio.play()
        image.src = "https://i.ytimg.com/vi/qDvMkxtLV74/maxresdefault.jpg"
    }
}

const plugin: moduleDefinition = {
    display_name: "METAL PIPE",
    description: "idk why i added this",
    id: "metalpipe",
    section: "fun",
    onactive: metalpipe,
    always: true,
    custom_render: false,
}

export default plugin;
