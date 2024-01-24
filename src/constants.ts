export const VERSION = 9
export const ITERATION = 0

export const NAME = 'car axle'
export const CREATOR = 'penguinify'

export var ENV = 'production'
if (document.location.hostname.includes('localhost')) {
    ENV = 'development'
} else if (document.location.hostname.includes('github.io')) {
    ENV = 'beta ;-;'
}
