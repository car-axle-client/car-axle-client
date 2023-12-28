import { UIManager } from './UIManager'

type sectionSave = {
    sectionID: string
    buttonValues: boolean[][]
}

export function saveHashToLocalStorage(index: string, hash: string): void {
    localStorage.setItem('cac__' + index, btoa(hash.toString()))
}

export function getHashFromLocalStorage(index: string): string {
    let storage_value = localStorage.getItem('cac__' + index)

    if (!storage_value) return ''

    return atob(storage_value)
}

function get_module_values(): sectionSave[] | undefined {
    try {
        return JSON.parse(localStorage.getItem('car-axle-client') as string)
    } catch (e) {
        console.error('Unable to catch car axle client storage, no bueno')
        return
    }
}

export function load_module_values(UI: UIManager) {
    // i let ts infer here and I force as string since we already have null check
    let cacStorage = get_module_values()
    if (!cacStorage) return
    // I assume format is correct as type check happens in saveicon -> action
    cacStorage.forEach(function (sectionValues: sectionSave) {
        UI.getSectionFromID(sectionValues['sectionID'])?.set_all_button_values_from_array(sectionValues['buttonValues'])
    })
}

export function new_save(UI: UIManager) {
    let cacStorage: Array<sectionSave> = []

    for (let section of UI.sections) {
        let buttonValues: boolean[][] = section.get_all_button_values()
        cacStorage.push({ sectionID: section.id, buttonValues })
    }

    localStorage.setItem('car-axle-client', JSON.stringify(cacStorage))
}

export function remove_save() {
    localStorage.removeItem('car-axle-client')
}
