// i was going to make each module a file but you end up having 1000 files and it's a pain to manage
// so yh you get this fat file
// good luck reading it

// Exploits

function NoForceReload(active: boolean) {
    if (active) {
        window.onbeforeunload = function (e) {
            return "please no"
        };
    } else {
        window.onbeforeunload = null;
    }
}

type functionsObject = {
    [key: string]: (active: boolean) => void
}

export const functions: functionsObject = {
    'NoForceReload': NoForceReload
};