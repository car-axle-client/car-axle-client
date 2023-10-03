import { UIManager } from "./UIManager"

export function load_module_values(UI: UIManager) {
    // i let ts infer here and I force as string since we already have null check
    const cacStorage = JSON.parse(
        localStorage.getItem('car-axle-client') as string
    )
    if (!cacStorage) return
    // I assume format is correct as type check happens in saveicon -> action
    cacStorage.forEach(function (sectionValues: any) {
        UI.getSectionFromID(
            sectionValues['sectionID']
        )?.set_all_button_values_from_array(sectionValues['buttonValues'])
    })
}

export function new_save(UI: UIManager) {
    console.log('%cAttempting Save', 'color:blue; font-size: 3vw;')

    // too lazy to rigidly define values
    let cacStorage: Array<any> = []

    for (let section of UI.sections) {
        let buttonValues = section.get_all_button_values()
        console.log('%c' + section.id, 'font-size:1.25vw;')
        console.table(buttonValues)
        cacStorage.push({ sectionID: section.id, buttonValues })
    }

    localStorage.setItem('car-axle-client', JSON.stringify(cacStorage))
}

export function remove_save() {
    localStorage.removeItem('car-axle-client')
}
