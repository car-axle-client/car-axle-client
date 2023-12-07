import { UIManager } from './UIManager'

export function saveHashToLocalStorage(index: string, hash: string): void {
    localStorage.setItem('cac__' + index, btoa(hash.toString()))
}

export function getHashFromLocalStorage(index: string): string {
    let storage_value = localStorage.getItem('cac__' + index)

    if (!storage_value) {
        return ''
    }

    return atob(storage_value)
}

export function load_module_values(UI: UIManager) {
    // i let ts infer here and I force as string since we already have null check
    const cacStorage = JSON.parse(localStorage.getItem('car-axle-client') as string)
    if (!cacStorage) return
    // I assume format is correct as type check happens in saveicon -> action
    cacStorage.forEach(function (sectionValues: any) {
        UI.getSectionFromID(sectionValues['sectionID'])?.set_all_button_values_from_array(sectionValues['buttonValues'])
    })
}

export function new_save(UI: UIManager) {
    // too lazy to rigidly define values
    let cacStorage: Array<any> = []

    for (let section of UI.sections) {
        let buttonValues = section.get_all_button_values()
        cacStorage.push({ sectionID: section.id, buttonValues })
    }

    localStorage.setItem('car-axle-client', JSON.stringify(cacStorage))
}

export function remove_save() {
    localStorage.removeItem('car-axle-client')
}
