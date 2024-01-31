import { DATABASE, ITERATION, VERSION } from "./constants";

// updates
export async function checkForUpdate(): Promise<boolean> {
    let versionData = await fetch(DATABASE + 'version.json')
    let version = await versionData.json()

    if (version.version > VERSION || (version.version == VERSION && version.i > ITERATION)) {
        return true
    }

    return false

}
