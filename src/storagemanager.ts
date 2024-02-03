export function saveStringToLocalStorage(index: string, string: string): void {
    localStorage.setItem('cac__' + index, btoa(string))
}

export function getStringFromLocalStorage(index: string): string {
    return atob(localStorage.getItem('cac__' + index) || '')
}
