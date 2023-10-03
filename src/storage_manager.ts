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
