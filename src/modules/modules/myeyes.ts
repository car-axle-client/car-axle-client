import { moduleDefinition } from "../moduleapi"

function why() {
    //skidded btw
    function a(e: any){var n=e.childNodes;for(var i in n){a(n[i]);if(n[i].style) n[i].style.backgroundImage="url(https://i.chzbgr.com/full/5759452672/h934FBF16/my-eyes-my-eyessssssssss)";}} a(document);
}

const plugin: moduleDefinition = {
    displayName: "don't click this...",
    id: "eyes",
    section: "fun",
    onactive: why,
    ondisable: why,
    always: true
}

export default plugin;
